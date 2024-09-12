import "./css/index.css"
import Terminal from './js/Terminal';

export default function App() {
    const website = 'ujjwal404.com.np';
    const github = 'ujjwalnp';
    const about = 'A dedicated Backend Developer with a robust educational background in Information Technology, currently pursuing a Bachelor of Engineering at Cosmos College of Management and Technology. With a strong focus on backend development within the MERN stack, this professional excels at tackling challenging projects and collaborating with cross-functional teams to deliver innovative solutions. Notable projects include AnaLUNG, a lung cancer detection system, and COREQ, a community for qualitative research. Demonstrated leadership as the President of coreQ, achieving recognition by winning Codestrom NCE Yatra 4.0 and participating in GitHub Field Day Nepal 2023. Proficient in JavaScript, Node.js, Python, C, C++, Express.js, and MongoDB, with a keen interest in machine learning-based research projects. Committed to continuous learning and staying updated with the latest technologies, bringing strong problem-solving skills and effective team collaboration to every project.';
    
    return (
        <div>
            
            <Terminal website={ website } github={ github } about={ about } />

        </div>
    );
}