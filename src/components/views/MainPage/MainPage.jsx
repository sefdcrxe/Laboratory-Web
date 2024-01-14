import React from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
import '../MainPage/MainPage.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
    const navigate = useNavigate();

    const MainPage = () => {navigate("/");};
    const ProjectPage = () => {navigate("/ProjectPage");};
    const MemberPage = () => {navigate("/MemberPage");};
    const ContactPage = () => {navigate("/ContactPage");};

  return (
    <div className="MainPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <div className="Group10" style={{width: 1447, height: 794, left: 0, top: 0, position: 'absolute'}}>
    <div className="Header" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute'}}>
    <div className="Rectangle14" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute', background: 'white'}} />
    <div className="WPoint" style={{left: 15.07, top: 69, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}> 연구실 이름 작성          </div>
    </div>
    <div className="Slider" style={{width: 1447, height: 66, left: 0, top: 177, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Rectangle3" style={{width: 1447, height: 66, background: '#E9E4FF'}} />
    </div>
    <div className="Rectangle24" style={{width: 1447, height: 551, left: 0, top: 243, position: 'absolute', background: 'white'}} />
    <div className="Home" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>HOME</div>
    <div className="OurLaboratory" style={{left: 48, top: 414, position: 'absolute', color: '#777777', fontSize: 32, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Our laboratory :</div>
  
    <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
    <div className="Line1" style={{width: 1363, height: 0, left: 42, top: 356, position: 'absolute', border: '1px #777777 solid'}}></div>


    
    {/* 네비바 */}
    <div className="Rectangle23" style={{ width: 139, height: 65, left: 27, top: 177, position: 'absolute', background: '#A994FF' }} />
    <div className="Home" style={{ left: 63, top: 198, position: 'absolute', color: 'white', fontSize: '1.5em', fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MainPage}>
    HOME
    </div>

    <div className="Project" style={{ left: 191, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ProjectPage}>
    PROJECT
    </div>

    <div className="Member" style={{left: 362, top: 198, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MemberPage}>
    MEMBER 
    </div>

    <div className="Contact" style={{left: 516, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ContactPage}>
    CONTACT
    </div>

    </div>
    <div className="Slider" style={{width: 1447, height: 302, left: 1, top: 492, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
    <div className="Rectangle3" style={{width: 1447, height: 302, background: '#A994FF'}} />

</div>
    </div>
  );
}

export default MainPage;