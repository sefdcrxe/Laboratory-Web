import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../../axiosConfig'
import { fetchProjects, detailProjects } from '../../../_actions/user_action'

function DetailProjectPage() {
  
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };
      const MainPage = () => {navigate("/");};
      const ProjectPage = () => {navigate("/ProjectPage");};
      const MemberPage = () => {navigate("/MemberPage");};
      const ContactPage = () => {navigate("/ContactPage");};
      const DetailProjectPage = () => {navigate("/DetailProjectPage");};
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProjectDetails(projectId);
        console.log('API response:', response);
        setProjectDetails(response);
      } catch (error) {
        console.error('프로젝트 세부 정보를 가져오는 동안 오류 발생:', error);
        setError('Error fetching project details');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [projectId]);
  const fetchProjectDetails = async (projectId) => {
    try {
      const response = await axios.get(`/projects/${projectId}`);
      return response.data; 
    } catch (error) {
      throw error;
    }
  };

  
  
  return (
    <div className="DetailProjectPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    
    <div className="Group7" style={{width: 1447, height: 1214, left: 0, top: 0, position: 'absolute'}}>
      <div className="Header" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute'}}>
        <div className="Rectangle14" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute', background: 'white'}} />
        <div className="WPoint" style={{left: 15.07, top: 69, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}> 연구실 이름 작성          </div>
     
      <div className="Slider" style={{width: 1447, height: 66, left: 0, top: 177, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div className="Rectangle3" style={{width: 1447, height: 66, background: '#E9E4FF'}} />
      </div>
      <div className="Rectangle31" style={{width: 1447, height: 971, left: 0, top: 243, position: 'absolute', background: 'white'}} />
      <div className="Project" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Project</div>

      <div className="Rectangle32" style={{width: 139, height: 65, left: 174, top: 177, position: 'absolute', background: '#A994FF'}} />

      <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
      <div className="Line2" style={{width: 1363, height: 0, left: 42, top: 356, position: 'absolute', border: '1px #777777 solid'}}></div>
      <div className="Rectangle41" style={{width: 11, height: 550, left: 42, top: 575, position: 'absolute', background: '#A994FF'}} />

      </div>
    
   
    
    {projectDetails && (
      
      <div className="Frame5" style={{ width: 1610, height: 142, left: 42, top: 395, position: 'absolute' }}>
      

        <div className="Rectangle25" style={{ width: 1110, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5' }} onClick={() => DetailProjectPage(projectDetails.projectId)} />
          <div className="Rectangle26" style={{ width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF' }} />

          <div className="ProjectDate" style={{ width: 186, left: 27, top: 43, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{projectDetails.period}</div>
          <div style={{ left: 27, top: 13, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word' }}>{projectDetails.title}</div>
          {projectDetails.techStacks.map((techStack, stackIndex) => (
            <div key={stackIndex} className={`Rectangle${stackIndex + 27}`} style={{ width: 106, height: 35, left: 24 + (stackIndex * 122), top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }}>
              <div className={techStack.techStackName} style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{techStack.techStackName}</div>
            </div>
          ))}


      
        <div className="Rectangle29" style={{ width: 106, height: 35, left: 24 + (projectDetails.techStacks.length * 122), top: 96, position: 'absolute', background: '#A994FF', borderRadius: 8 }}>
        <div className="Etri" style={{ width: 106, height: 20, textAlign: 'center', color: 'white', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{projectDetails.partnerCompany}</div>
      </div>

      
      <img
      className="ProjectThumbnail"
      style={{ width: 1100, height: 100, objectFit: 'cover', borderRadius: 8, position: 'absolute', left: 900, top: 20 }}
      src={projectDetails.projectImages.length > 0 ? projectDetails.projectImages[0].imageUrl : '기본 이미지 URL'}
      alt="projectDetails Thumbnail"
    />

    <div className="Rectangle40" style={{ width: 981, height: 550, left: 10, top: 180, position: 'absolute', background: '#F5F5F5' }}>
      {projectDetails.description && (
        <p style={{ margin: 10, color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', lineHeight: 1.6, wordWrap: 'break-word' }}>
          {projectDetails.description}
        </p>
      )}
    </div>


    



        
        <div>
          <h3>Files:</h3>
          <ul>
            {projectDetails.files.map(file => (
              <li key={file.fileId}>
                <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">{file.fileName}</a>
              </li>
            ))}
          </ul>
        </div>

      

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
    

  </div>
    </div>
  );
}

export default DetailProjectPage;