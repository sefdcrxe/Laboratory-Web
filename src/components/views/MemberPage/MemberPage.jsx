import React from 'react';
import { Navbar as CustomNavbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function MemberPage() {

    const navigate = useNavigate();

    const MainPage = () => {navigate("/");};
    const ProjectPage = () => {navigate("/ProjectPage");};
    const MemberPage = () => {navigate("/MemberPage");};
    const ContactPage = () => {navigate("/ContactPage");};

  return (
    <div className="MemberPage d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    
    <div className="Header" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute'}}>
      <div className="Rectangle14" style={{width: 1447, height: 177, left: 0, top: 0, position: 'absolute', background: 'white'}} />
      <div className="WPoint" style={{left: 15.07, top: 69, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}> 연구실 이름 작성          </div>
    </div>
    <div className="Slider" style={{width: 1447, height: 66, left: 0, top: 177, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Rectangle3" style={{width: 1447, height: 66, background: '#E9E4FF'}} />
    </div>
    <div className="Rectangle44" style={{width: 1447, height: 971, left: 0, top: 243, position: 'absolute', background: 'white'}} />
    <div className="Rectangle55" style={{width: 1447, height: 971, left: 0, top: 243, position: 'absolute', background: 'white'}} />
     <div className="Introduce" style={{left: 108, top: 559, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Introduce</div>
    <div className="Member" style={{left: 48, top: 286, position: 'absolute', color: '#412C86', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Member</div>
    <div className="YongYoonSeo" style={{left: 83, top: 414, position: 'absolute', color: '#777777', fontSize: 24, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Yong-yoon Seo  서용윤</div>
    <div className="DonggukUniversity" style={{left: 1250, top: 13, position: 'absolute', textAlign: 'right', color: '#777777', fontSize: 20, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Dongguk University</div>
    <div className="Line3" style={{width: 1363, height: 0, left: 42, top: 356, position: 'absolute', border: '1px #777777 solid'}}></div>
    
    {/* 네비바 */}
   <div className="Home" style={{ left: 63, top: 198, position: 'absolute', color: '#412C86', fontSize: '1.5em', fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MainPage}>
   HOME
   </div>

   <div className="Project" style={{ left: 191, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ProjectPage}>
   PROJECT
   </div>

   <div className="Rectangle23" style={{ width: 139, height: 65, left: 344, top: 177, position: 'absolute', background: '#A994FF' }} />
   <div className="Member" style={{left: 362, top: 198, position: 'absolute', color: 'white', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={MemberPage}>
   MEMBER 
   </div>

   <div className="Contact" style={{left: 516, top: 197, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word', cursor: 'pointer'}} onClick={ContactPage}>
   CONTACT
   </div>

    <div className="Rectangle46" style={{width: 981, height: 396, left: 42, top: 604, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle54" style={{width: 115, height: 124, left: 387, top: 379, position: 'absolute', background: '#A99393'}} />
    <div className="Rectangle48" style={{width: 346, height: 367, left: 1081, top: 375, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Vector" style={{width: 15, height: 28, left: 1109, top: 452, position: 'absolute', border: '1.50px #A994FF solid'}}></div>
    <div className="Rectangle49" style={{width: 11, height: 396, left: 42, top: 604, position: 'absolute', background: '#A994FF'}} />
    <div className="Professor" style={{left: 83, top: 457, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Professor</div>
    <div className="Contact" style={{left: 108, top: 1056, position: 'absolute', color: '#412C86', fontSize: 24, fontFamily: 'The Jamsil', fontWeight: '400', wordWrap: 'break-word'}}>Contact</div>
    <div className="Rectangle52" style={{width: 981, height: 88, left: 42, top: 1097, position: 'absolute', background: '#F5F5F5'}} />
    <div className="Rectangle53" style={{width: 11, height: 88, left: 42, top: 1097, position: 'absolute', background: '#A994FF'}} />
    <div className="11111111" style={{width: 163, left: 123, top: 1112, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', lineHeight: 24, wordWrap: 'break-word'}}>010 - 1111 - 1111</div>
    <div className="XxxxDguAcKr" style={{width: 163, left: 123, top: 1151, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', lineHeight: 24, wordWrap: 'break-word'}}>xxxx @ dgu.ac.kr</div>
    <div style={{width: 81, left: 1138, top: 457, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>서용윤</div>
    <div className="Vector" style={{width: 30, height: 56.67, left: 33, top: 413, position: 'absolute', border: '1.50px #A994FF solid'}}></div>
    <div className="Professor" style={{left: 1101, top: 395, position: 'absolute', color: '#412C86', fontSize: 32, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Professor</div>
    <div className="Student" style={{left: 1102, top: 519, position: 'absolute', color: '#412C86', fontSize: 32, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>Student</div>
    <div className="Group4" style={{width: 139, height: 65, left: 337, top: 177, position: 'absolute'}}>
      </div>
    <div className="Vector" style={{width: 15, height: 28, left: 1111, top: 582, position: 'absolute', border: '1.50px #A994FF solid'}}></div>
    <div className="1" style={{width: 81, left: 1140, top: 587, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>누군가 1</div>
    <div className="Vector" style={{width: 15, height: 28, left: 1111, top: 632, position: 'absolute', border: '1.50px #A994FF solid'}}></div>
    <div className="2" style={{width: 81, left: 1140, top: 637, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>누군가 2</div>
    <div className="Vector" style={{width: 15, height: 28, left: 1111, top: 682, position: 'absolute', border: '1.50px #A994FF solid'}}></div>
    <div className="3" style={{width: 81, left: 1140, top: 687, position: 'absolute', color: '#777777', fontSize: 16, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>누군가 3</div>
    <div className="Frame" style={{width: 22, height: 22, left: 76, top: 1152, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <div className="Group" style={{width: 22, height: 22, position: 'relative'}}>
        <div className="Vector" style={{width: 22, height: 22, left: 0, top: 0, position: 'absolute'}}></div>
        <div className="Vector" style={{width: 19.25, height: 16.50, left: 1.83, top: 3.67, position: 'absolute', background: 'black'}}></div>
      </div>
    </div>
    <div className="Vector" style={{width: 18, height: 17, left: 76, top: 1115, position: 'absolute', background: 'black'}}></div>
    <div style={{left: 409, top: 424, position: 'absolute', color: 'white', fontSize: 36, fontFamily: 'NanumSquare Neo', fontWeight: '350', wordWrap: 'break-word'}}>사진</div>

    </div>
  );
}

export default MemberPage;