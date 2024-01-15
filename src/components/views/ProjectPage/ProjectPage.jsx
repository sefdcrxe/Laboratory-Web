import React, { useState, useEffect } from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import axios from '../../axiosConfig';
import axios from '../../axiosConfig'


function ProjectPage() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again.'); // Set error state
            });
    }, []);


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
    <div className="OurProjectAreAsFollows" style={{left: 48, top: 414, position: 'absolute', color: '#777777', fontSize: 32, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Our project are as follows :</div>
    
    <div className="Rectangle23" style={{width: 139, height: 65, left: 174, top: 177, position: 'absolute', background: '#A994FF'}} />
    
    {/*  
    <div className="Frame3" style={{width: 610, height: 142, left: -300, position: 'relative', marginTop: 200}}>
    <div className="Rectangle25" style={{width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle26" style={{width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF'}} />
    <div className="Etri" style={{left: 27, top: 71, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>etri</div>
    <div className="01202306" style={{width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>2023-01 - 2023-06</div>
    <div style={{left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word'}}>빅테크 기업 프로젝트</div>
    <div className="Rectangle27" style={{width: 201, height: 118, left: 402, top: 12, position: 'absolute', background: '#A994FF'}} />
    <div className="Rectangle27" style={{width: 106, height: 35, left: 24, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
    <div className="Java" style={{width: 106, height: 20, left: 24, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Java</div>
    <div className="Rectangle28" style={{width: 106, height: 35, left: 146, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
    <div className="SpringBoot" style={{width: 106, height: 20, left: 146, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Spring Boot</div>
  </div>
  
  <div className="Frame4" style={{width: 610, height: 142, left: -160, position: 'relative', marginTop: 200}}>
    <div className="Rectangle25" style={{width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle26" style={{width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF'}} />
    <div className="Kisti" style={{left: 27, top: 71, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>KISTI</div>
    <div className="04202310" style={{width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>2023-04 - 2023-10</div>
    <div style={{left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word'}}>기계학습 기술 수요</div>
    <div className="Rectangle27" style={{width: 201, height: 118, left: 402, top: 12, position: 'absolute', background: '#A994FF'}} />
    <div className="Rectangle27" style={{width: 106, height: 35, left: 24, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
    <div className="React" style={{width: 106, height: 20, left: 24, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>React</div>
    <div className="Rectangle28" style={{width: 106, height: 35, left: 146, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
    <div className="NodeJs" style={{width: 106, height: 20, left: 146, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Node.js</div>
  </div>
  */}

  {projects.length > 0 ? (
    projects.map((project, index) => (
      <div key={index} className={`Frame${index + 3}`} style={{ width: 610, height: 142, left: -160 * index, position: 'relative', marginTop: 200 }}>

      
        <div className="Rectangle25" style={{ width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5' }} onClick={DetailProjectPage}/>
        <div className="Rectangle26" style={{ width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF' }} />
        <div className="ProjectName" style={{ left: 27, top: 71, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{project.title}</div>
        <div className="ProjectDate" style={{ width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{project.period}</div>
        <div style={{ left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word' }}>{project.title}</div>
        {project.techStacks.map((techStack, stackIndex) => (
          <div key={stackIndex} className={`Rectangle${stackIndex + 27}`} style={{ width: 106, height: 35, left: 24 + (stackIndex * 122), top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }}>
            <div className={techStack.techStackName} style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{techStack.techStackName}</div>
          </div>
        ))}
        <div className="Rectangle29" style={{ width: 106, height: 35, left: 24 + (project.techStacks.length * 122), top: 96, position: 'absolute', background: '#A994FF', borderRadius: 8 }}>
          <div className="Etri" style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{project.partnerCompany}</div>
        </div>
        <img className="ProjectThumbnail" style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 8, position: 'absolute', left: 500, top: 20 }} src={project.thumbnailUrl} alt="Project Thumbnail" />
      </div>
    ))
  ) : (
    // If there are no projects, display a placeholder or message
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