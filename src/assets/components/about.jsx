import AboutBox1 from "./about-components/aboutBox1";
import AboutContent from "./about-components/aboutContent";


export default function About(){
    return(
        <>
            {/* box 1 */}
            <AboutBox1 />
            <div className="flex flex-col items-center gap-10 py-8 border-t border-dashed border-primary">
                {/* atas */}
                <AboutContent content="A student of Nusa Putra University, S1 Information Systems Study Program, I have found joy in my challenging academic journey. As an individual who enjoys learning new things, my confidence is tested through leadership roles in leading various projects and managing events."/>
                {/* bawah */}
                <AboutContent content="Over the course of my studies, my interest has grown in the areas of project management, UI &UX, and website development more specifically in frontend developers. I realize the importance of detail in achieving success, and thats what I focus on every step I take. I am committed to continuing to hone my skills and knowledge!"/>
            </div>
        </>
    )
}