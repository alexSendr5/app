"use client"

import { ChangeEvent, useState } from "react"
import Image from "next/image"
import Formfield from "./Formfield"
import { categoryFilters } from "@/constants"
import CustomMenu from "./CustomMenu"
import Button from "./Button"
type Props = {
    type: string,
}

const ProjectForm = ({type}: Props) => {

    const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0]

        if(!file){
            return
        }

        if(!file.type.includes('image')){
            alert('Please, import an image file')
        }

        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = () => {
            const result = reader.result as string

            handleStateChange('image', result)
        }
    }
    const onSubmitForm = (e: React.FormEvent) => {}
    const handleStateChange = (fieldName: string, value: string) => {
        setForm(
            (prevState) => ({...prevState, [fieldName]: value})
        )
    }

    const [isSubmittingForm, setIsSubmittingForm] = useState(false)
    const [form, setForm] = useState({
        title: '',
        image: '',
        description: '',
        LiveSiteUrl: '',
        GitHubUrl: '',
        category: ''
})
    return(
        <form onSubmit={onSubmitForm} className="flexStart form">
            <div className="flexStart form_image-container">
                <label htmlFor="poster" className="flexCenter form_image-label">{!form.image && 'Please, upload an image to your project'}</label>
                    <input id="image"
                    type="file"
                    accept="image/*"
                    required={type === 'create'}
                    className="form_image-input"
                    onChange={handleChangeImg}/>
                {form.image && (<Image src = {form?.image} className = 'sm:p-10 object-contain z-20' alt = 'poster Project' fill/>)}
            </div>

            <Formfield
                title='Title'
                state={form.title}
                placeholder='Flexibble'
                setState={(value) => handleStateChange(value, 'title')}/>
             <Formfield
                title='Description'
                state={form.description}
                placeholder='Showcase and discover remarkable developer projects'
                setState={(value) => handleStateChange(value, 'description')}/>
             <Formfield
                type="url"
                title='Website URL'
                state={form.LiveSiteUrl}
                placeholder='https://jsmastery.pro'
                setState={(value) => handleStateChange(value, 'LiveSiteUrl')}/>
             <Formfield
                type="url"
                title='GitHub URL'
                state={form.GitHubUrl}
                placeholder='https://github.com/your_name'
                setState={(value) => handleStateChange(value, 'GitHubUrl')}/>

            <CustomMenu
            title = 'Category'
            state = {form.category}
            filters = {categoryFilters}
            setState = {(value) => handleStateChange('category', value)}
            />

            <div className="flexStart w-full">
                <Button
                title = {isSubmittingForm ? `${type === 'create' ? 'Creating' : 'Editing'}` : `${type === 'create' ? 'Create' : 'Edit'}`}
                type = 'submit'
                leftIcon = {isSubmittingForm ? '' : '/plus.svg'}
                isSubmitting = {isSubmittingForm}
                />
            </div>
        </form>

    )
}

export default ProjectForm