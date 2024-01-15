import React, { useEffect, useState } from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
//import '../MainPage/MainPage.css';
import { useParams } from 'react-router-dom';
import axios from '../../axiosConfig'


function DetailProjectPage() {
  const { projectId } = useParams();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/projects/${projectId}`)
      .then(response => {
        setProjectDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching project details:', error);
      });
  }, [projectId]);
  
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
      <div className="Home" style={{left: 63, top: 198, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>HOME</div>
      <div className="Project" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Project</div>
      <div className="Member" style={{left: 362, top: 198, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>MEMBER </div>
      <div className="Contact" style={{left: 516, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>CONTACT</div>
      <div className="Rectangle32" style={{width: 139, height: 65, left: 174, top: 177, position: 'absolute', background: '#A994FF'}} />
      <div className="Project" style={{left: 191, top: 197, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>PROJECT</div>
      <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
      <div className="Line2" style={{width: 1363, height: 0, left: 42, top: 356, position: 'absolute', border: '1px #777777 solid'}}></div>
      <div className="Rectangle40" style={{width: 981, height: 257, left: 42, top: 575, position: 'absolute', background: '#F5F5F5'}} />
      <div className="Rectangle41" style={{width: 11, height: 257, left: 42, top: 575, position: 'absolute', background: '#A994FF'}} />
      <div style={{width: 920, left: 76, top: 584, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', lineHeight: 24, wordWrap: 'break-word'}}>내용</div>
      <div className="Rectangle42" style={{width: 981, height: 180, left: 42, top: 875, position: 'absolute', background: '#F5F5F5'}} />
    </div>
    
    <div className="Frame5" style={{width: 610, height: 142, left: 42, top: 395, position: 'absolute'}}>
      <div className="Rectangle25" style={{width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5'}} />
      <div className="Rectangle26" style={{width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF'}} />
      <div className="Etri" style={{left: 25, top: 70, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>협력사</div>
      <div className="01202306" style={{width: 186, left: 25, top: 42, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>기간</div>
      <div style={{left: 25, top: 12, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word'}}>프로젝트 명</div>
      <div className="Rectangle27" style={{width: 201, height: 118, left: 402, top: 12, position: 'absolute', background: '#A994FF'}} />
      <div className="Rectangle27" style={{width: 106, height: 35, left: 24, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
      <div className="Java" style={{width: 106, height: 20, left: 24, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>기술스택1</div>
      <div className="Rectangle28" style={{width: 106, height: 35, left: 146, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8}} />
      <div className="SpringBoot" style={{width: 106, height: 20, left: 146, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>기술스택2</div>
    </div>

    {projectDetails && (
      <div className="Frame5" style={{ width: 610, height: 142, left: 42, top: 395, position: 'absolute' }}>
        <div className="Rectangle25" style={{ width: 610, height: 142, left: 0, top: 0, position: 'absolute', background: '#F5F5F5' }} />
        <div className="Rectangle26" style={{ width: 11, height: 142, left: 0, top: 0, position: 'absolute', background: '#A994FF' }} />
        <div className="partnerCompany" style={{ left: 25, top: 70, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{projectDetails.partnerCompany}</div>
        <div className="period" style={{ width: 186, left: 25, top: 42, position: 'absolute', color: '#777777', fontSize: 11, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{projectDetails.period}</div>
        <div style={{ left: 25, top: 12, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'Karla', fontWeight: '300', wordWrap: 'break-word' }}>{projectDetails.title}</div>
        <div className="Rectangle27" style={{ width: 201, height: 118, left: 402, top: 12, position: 'absolute', background: '#A994FF' }} />
        <div className="Rectangle27" style={{ width: 106, height: 35, left: 24, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }} />
        <div className="Rectangle28" style={{ width: 106, height: 35, left: 146, top: 96, position: 'absolute', background: '#7FC87D', borderRadius: 8 }} />
        <div className="techStackName" style={{ width: 106, height: 20, left: 24, top: 103, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word' }}>{projectDetails.techStacks[0].techStackName}</div>

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
        <div>
          <h3>Tech Stacks:</h3>
          <ul>
            {projectDetails.techStacks.map(techStack => (
              <li key={techStack.techStackId}>{techStack.techStackName}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Project Images:</h3>
          {projectDetails.projectImages.map(image => (
            <div key={image.imageId}>
              <img src={image.imageUrl} alt={image.description} style={{ maxWidth: '100%', height: 'auto' }} />
              <p>{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    

    
  </div>
    </div>
  );
}

export default DetailProjectPage;