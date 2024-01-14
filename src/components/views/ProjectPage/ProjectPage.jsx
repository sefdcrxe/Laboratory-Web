import React, { useState, useEffect } from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig';

function ProjectPage() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({});

    useEffect(() => {
        // Fetch data from the API endpoint using Axios
        axios.get('/projects')
            .then(response => {
                setProjects(response.data);
                setNewProject(response.data[0]); // Assuming the first project for demonstration
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    const MainPage = () => {navigate("/");};
    const ProjectPage = () => {navigate("/ProjectPage");};
    const MemberPage = () => {navigate("/MemberPage");};
    const ContactPage = () => {navigate("/ContactPage");};

  return (
    <div className="ProjectPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

    <div className="Header" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle14" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute', background: 'white'}} />
      <div className="WPoint" style={{left: 15.07, top: 69, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}> 연구실 이름 작성          </div>
    </div>
    <div className="Slider" style={{width: 1447, height: 66, left: 0, top: 177, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Rectangle3" style={{width: 1447, height: 66, background: '#E9E4FF'}} />
    </div>
    <div className="ProjectName" style={{left: 69, top: 549, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Project Name</div>
    <div className="StartDate" style={{left: 877, top: 549, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Start date</div>
    <div className="Duration" style={{left: 1077, top: 549, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Duration</div>
    <div className="Status" style={{left: 1271, top: 549, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Status</div>
    <div className="Project" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Project</div>
    <div className="OurProjectAreAsFollows" style={{left: 48, top: 414, position: 'absolute', color: '#777777', fontSize: 32, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Our project are as follows :</div>
    
    <div className="Rectangle23" style={{width: 139, height: 65, left: 174, top: 177, position: 'absolute', background: '#A994FF'}} />
    
    {/* 네비바 */}
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
    

    <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
    <div className="Line1" style={{width: 1363, height: 0, left: 42, top: 356, position: 'absolute', border: '1px #777777 solid'}}></div>
    <div className="Rectangle25" style={{width: 1357, height: 75, left: 45, top: 591, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle26" style={{width: 11, height: 75, left: 45, top: 591, position: 'absolute', background: '#A994FF'}} />
   
{/* api 데이터 연동 */}
            <div style={{ left: 70, top: 636, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>
                {newProject.projectName} 
            </div>

            <div className="NewProject" style={{ left: 70, top: 605, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>
                {newProject.projectName} 
                 </div>

            <div className="03" style={{ left: 898, top: 622, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>
                {newProject.startDate} 
                   </div>

            <div className="Year" style={{ left: 1108, top: 622, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>
                {newProject.duration}
                   </div>


    <div className="Rectangle27" style={{width: 106, height: 50, left: 1263, top: 604, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
    <div className="Ongoing" style={{width: 106, height: 20, left: 1263, top: 619, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Ongoing</div>
    <div className="Rectangle28" style={{width: 1357, height: 75, left: 45, top: 683, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle29" style={{width: 11, height: 75, left: 45, top: 683, position: 'absolute', background: '#A994FF'}} />
    <div style={{left: 70, top: 727, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>기계학습 기반 기술수요 추출 알고리즘 개발</div>
    <div className="DevelopingExtractionAlgorithmOfTechnologyNeedsBasedOnMachineLearning" style={{left: 70, top: 697, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Developing extraction algorithm of technology needs based on machine learning</div>
    <div className="03" style={{left: 898, top: 714, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>2023.03</div>
    <div className="Month" style={{left: 1097, top: 714, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>8 Month</div>
    
    <div className="Rectangle30" style={{width: 106, height: 50, left: 1263, top: 696, position: 'absolute', background: '#D9534F', borderRadius: 8}} />
    <div className="Complete" style={{width: 106, height: 20, left: 1263, top: 711, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Complete</div>


    
    </div>

    
  );
}

export default ProjectPage;