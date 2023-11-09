import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import FlipToFrontOutlinedIcon from '@mui/icons-material/FlipToFrontOutlined';
import ResetTvOutlinedIcon from '@mui/icons-material/ResetTvOutlined';
import BackupTableOutlinedIcon from '@mui/icons-material/BackupTableOutlined';
import FloodOutlinedIcon from '@mui/icons-material/FloodOutlined';
import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./Drower.css"
function Drower2() {
  return (
    <div style={{display:"flex", flexDirection:"column",justifyContent:"center", backgroundColor:"#FFFF",marginTop:"5px",borderRadius:"3px"}}>
        <div className="contact" style={{padding:"15px"}}>
            <div className="name-resturent" style={{backgroundColor:"rgb(234, 234, 234)" ,padding:"10px", borderRadius:"5px"}}>
                <div className="avatar-resturent" style={{display:"flex", alignItems:"center"}}>
                    <img src="https://i.ibb.co/s1Yx7mt/R.png" alt="resturent name"  style={{border:"1px solid red", width:"35px",height:"35px", borderRadius:"50%"}}/>
                    <p className="resturentName" style={{fontSize:"25px", marginLeft:"15px", fontWeight:"bold"}}>Sultan's Dine</p>                
                </div>
                <div className="location" style={{display:"flex", marginTop:"8px",color:"rgb(85, 85, 85)"}}>
                    <EditLocationAltOutlinedIcon/>
                    <p style={{marginLeft:"7px"}}>59 Satmasjid Road, Dhanmondi, Green Akshay Plaza, Corner of Jhigatola Bus Stop, Dhaka City 1205</p>
                </div>
                <div className="phone" style={{display:"flex", marginTop:"8px", alignItems:"center",color:"rgb(85, 85, 85)"}}>
                    <LocalPhoneOutlinedIcon/>
                    <p style={{marginLeft:"7px"}}>+880 1775-003218</p>
                </div>
                <div className="mail" style={{display:"flex", marginTop:"8px", alignItems:"center",color:"rgb(85, 85, 85)"}}>
                    <EmailOutlinedIcon/>
                    <p style={{marginLeft:"7px"}}>sultandine.uttora@gmail.com</p>
                </div>
            </div>
            <div className="" style={{backgroundColor:"#44a08d", width:"100%", height:"1px", marginTop:"10px", marginBottom:"10px"}}></div>

            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <SpaceDashboardOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Dashboard</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px", flexGrow:"0"}}>
               <div className="" style={{display:"flex", alignItems:"center"}}>
               <FlipToFrontOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Orders</p>
               </div>
               <p style={{backgroundColor:"#44a08d", borderRadius:"50% ", padding:"3px", width:"20px",height:"20px" ,display:"flex", alignItems:"center",justifyContent:"center",marginLeft:"auto"}}>10</p>
            </div>
            <p style={{fontSize:"15px", marginTop:"10px"}}>Reservation</p>
            <div className="" style={{backgroundColor:"#44a08d", width:"100%", height:"1px", marginBottom:"10px"}}></div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <ResetTvOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Reservation</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <BackupTableOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Table</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <FloodOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Floor</p>
            </div>

            <p style={{fontSize:"15px", marginTop:"10px"}}>Profile</p>
            <div className="" style={{backgroundColor:"#44a08d", width:"100%", height:"1px", marginBottom:"10px"}}></div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <DataThresholdingOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Resturent</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <AddBusinessOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Branch</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <Person2OutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Profile</p>
            </div>

            <p style={{fontSize:"15px", marginTop:"10px"}}>Essentials</p>
            <div className="" style={{backgroundColor:"#44a08d", width:"100%", height:"1px", marginBottom:"10px"}}></div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <QrCodeScannerOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>QR Code</p>
            </div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <SettingsOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Settings</p>
            </div>

            <p style={{fontSize:"15px", marginTop:"10px"}}>Warnning</p>
            <div className="" style={{backgroundColor:"#44a08d", width:"100%", height:"1px", marginBottom:"10px"}}></div>
            <div className="button" style={{display:"flex", alignItems:"center",padding:"8px"}}>
                <LogoutOutlinedIcon/>
                <p style={{fontSize:"18px", marginLeft:"10px"}}>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default Drower2