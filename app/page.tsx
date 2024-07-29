import Categories from "./components/Categories";
import LoadMore from "./components/LoadMore";
import ProjcectCard from "./components/ProjectCard";
export const CardData = {
    title: 'Not true project',
    image: "/profile-post.png",
    descryption: 'my first project in my first site'
}
const Home = () => {
    return(
        <section className="flex-start flex-col paddings mb-16">
            <Categories />
            <section className="projects-grid">
                {<ProjcectCard
                    title= {CardData.title}
                    image= {CardData.image}
                />}
            </section>
            <LoadMore />
        </section>
    )
}

export default Home;