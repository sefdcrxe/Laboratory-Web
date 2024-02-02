import React, { useState, useEffect } from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import axios from '../../axiosConfig';
import axios from '../../axiosConfig'
import { fetchProjects, detailProjects } from '../../../_actions/user_action'

function ProjectPage() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const titleRef = React.createRef();
    const titleWidth = titleRef.current ? titleRef.current.getBoundingClientRect().width : 0;


 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/projects');
        console.log('API response:', response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          console.error('No response received');
        } else {
          console.error('Error message:', error.message);
        }
        setError('Error fetching data. Please try again.');
      }
    }      

    fetchData();
  }, []);
  
  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

 // const handleProjectClick = (projectId) => {navigate(projectId); };
 const handleProjectClick = (projectId) => {
  navigate(`/projects/${projectId}`);
};
    const MainPage = () => {navigate("/");};
    const ProjectPage = () => {navigate("/ProjectPage");};
    const MemberPage = () => {navigate("/MemberPage");};
    const ContactPage = () => {navigate("/ContactPage");};
    const DetailProjectPage = () => {navigate("/DetailProjectPage");};

  return (
    <div className="ProjectPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

    <div className="Header" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle14" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute', background: 'white'}} />
      <div className="WPoint" style={{left: 15.07, top: 69, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}> 연구실 이름 작성          </div>
    </div>
    <div className="Slider" style={{width: 1447, height: 66, left: 0, top: 177, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Rectangle3" style={{width: 1447, height: 66, background: '#E9E4FF'}} />
    </div>
    <div className="Project" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Project</div>
    
    <div className="Rectangle23" style={{width: 139, height: 65, left: 174, top: 177, position: 'absolute', background: '#A994FF'}} />
    

{/* 상품 불러오기 */}
 <div className="row mt-4">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Link to={`/projects/${project.projectId}`} key={project.projectId} className="link-no-underline" onClick={() => window.scrollTo(0, 0)}>
              <div key={index} className={`Frame${index + 3}`} style={{ width: 1110, height: 200, top: 400, left: '50%', marginLeft: -550, position: 'relative', marginTop: 20 }}>
                <div className="Rectangle25" style={{ width: 1110, height: 200, left: 0, top: 0, position: 'absolute', background: '#F5F5F5', overflow: 'hidden' }} onClick={() => DetailProjectPage(project.projectId)} />
                   <div className="ProjectDate" style={{ width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{project.period}</div>
          <div style={{ left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word' }}>{project.title}</div>
          {project.techStacks.map((techStack, stackIndex) => (
            <div key={stackIndex} className={`Rectangle${stackIndex + 27}`} style={{ width: 106, height: 35, left: 24 + (stackIndex * 122), top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }}>
              <div className={techStack.techStackName} style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{techStack.techStackName}</div>
            </div>
          ))}

          <div className="Rectangle29" style={{ width: 106, height: 35, left: 24 + (project.techStacks.length * 122), top: 96, position: 'absolute', background: '#A994FF', borderRadius: 8 }}>
            <div className="Etri" style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{project.partnerCompany}</div>
          </div>
          <img className="ProjectThumbnail" style={{ width: 270, height: 150, objectFit: 'cover', borderRadius: 8, position: 'absolute', top: 25, left: 800}}src={project.thumbnailUrl} alt="Project Thumbnail" />
       
        </div>
        </Link>
       
      ))
    ) : (
     <div className="Frame3" style={{ width: 610, height: 142, marginTop: 200, left: -300, position: 'relative' }} onClick={DetailProjectPage}>
        <div className="Rectangle25" style={{ width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5' }} />
        <div className="Rectangle26" style={{ width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF' }} />
        <div className="Etri" style={{ left: 27, top: 71, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>협력사</div>
        <div className="01202306" style={{ width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>기간</div>
        <div style={{ left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word' }}>프로젝트 명</div>
        <div className="Rectangle27" style={{ width: 201, height: 118, left: 402, top: 12, position: 'absolute', background: '#A994FF' }} />
        <div className="Rectangle27" style={{ width: 106, height: 35, left: 24, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }} />
        <div className="Java" style={{ width: 106, height: 20, left: 24, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>기술스택1</div>
        <div className="Rectangle28" style={{ width: 106, height: 35, left: 146, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }} />
        <div className="SpringBoot" style={{ width: 106, height: 20, left: 146, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>기술스택2</div>
      </div>

    )}

  
    </div>
   

    {/* 네비바 */}
    <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
      
   <div className="Home" style={{ left: 63, top: 198, position: 'absolute', color: '#412C86', fontSize: '1.5em', fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MainPage}>
    HOME
    </div>

    <div className="Project" style={{ left: 191, top: 197, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ProjectPage}>
    PROJECT
    </div>

    <div className="Member" style={{left: 362, top: 198, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MemberPage}>
    MEMBER 
    </div>

    <div className="Contact" style={{left: 516, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ContactPage}>
    CONTACT
    </div>
    

    
{/* api 데이터 연동 */}
            


    </div>
  
    
  );
}

export default ProjectPage;