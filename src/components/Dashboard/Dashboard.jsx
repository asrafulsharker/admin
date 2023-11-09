import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCardIcon from '@mui/icons-material/AddCard';
import SimpleChart1 from '../Chart/Simplechart1'

function Dashboard() {
  return (
    <div style={{ display: "flex", marginTop: "8px", marginLeft: "5px" }}>
      <div className="" style={{ width: "70%" }}>
        <div className="dashboardNav" style={{ marginLeft: "auto" }}>
          <div style={{ backgroundColor: "#FFFF", padding: "5px", borderRadius: "5px", display: "flex", justifyContent: "flex-end" ,boxShadow:"initial"}}>
            <FormControl sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="branch-label">Select Branch</InputLabel>
              <Select
                labelId="branch-label"
                id="branch-select"
                label="Branch"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Sultan Dine - Savar</MenuItem>
                <MenuItem value={20}>Sultan Dine - Dhanmondi</MenuItem>
                <MenuItem value={30}>Sultan Dine - Narayongonj</MenuItem>
                <MenuItem value={40}>Sultan Dine - Farmgate</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120, backgroundColor:"#44a08d", borderRadius:"5px", color:"#FFFF"}}>
              <InputLabel id="month-label" style={{color:"#FFFF"}}>January</InputLabel>
              <Select
                labelId="month-label"
                id="month-select"
                label="Month"
                style={{color:"#FFFF"}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                {/* Add other months as needed */}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 , backgroundColor:"#44a08d", borderRadius:"5px"}}>
              <InputLabel id="year-label" style={{color:"#FFFF"}}>2023</InputLabel>
              <Select
                labelId="year-label"
                id="year-select"
                label="Year"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2023}>2023</MenuItem>
                {/* Add other years as needed */}
              </Select>
            </FormControl>
          </div>
          <div className="boxOrderBAdge" style={{display:"flex",marginTop:"8px"}}>
            <div className="boxBadge" style={{backgroundColor:"rgb(255, 185, 185)" ,marginRight:"5px", padding:"15px", borderRadius:"5px",display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",flexGrow:"1"}}>
                <div className="semiboxBadge" style={{display:"flex", alignItems:"center"}}>
                <AddCardIcon style={{fontSize:"25px",color:"rgb(85, 85, 85)"}}/>
                <p style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px",color:"rgb(85, 85, 85)"}}>Total Revinew</p>
                </div>
                <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"8px",color:"rgb(85, 85, 85)"}}>$ 1305K</p>
            </div>
            <div className="boxBadge" style={{backgroundColor:"rgb(185, 225, 255)" ,marginRight:"5px", padding:"15px", borderRadius:"5px",display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",flexGrow:"1"}}>
                <div className="semiboxBadge" style={{display:"flex", alignItems:"center"}}>
                <AddCardIcon style={{fontSize:"25px",color:"rgb(85, 85, 85)"}}/>
                <p style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px",color:"rgb(85, 85, 85)"}}>Total Scan</p>
                </div>
                <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"8px",color:"rgb(85, 85, 85)"}}>$ 1305K</p>
            </div>
            <div className="boxBadge" style={{backgroundColor:"rgb(185, 255, 221)" ,marginRight:"5px", padding:"15px", borderRadius:"5px",display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",flexGrow:"1"}}>
                <div className="semiboxBadge" style={{display:"flex", alignItems:"center"}}>
                <AddCardIcon style={{fontSize:"25px",color:"rgb(85, 85, 85)"}}/>
                <p style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px",color:"rgb(85, 85, 85)"}}>Total Order</p>
                </div>
                <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"8px",color:"rgb(85, 85, 85)"}}>$ 1305K</p>
            </div>
            <div className="boxBadge" style={{backgroundColor:"rgb(255, 185, 220)" ,marginRight:"5px", padding:"15px", borderRadius:"5px",display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center",flexGrow:"1"}}>
                <div className="semiboxBadge" style={{display:"flex", alignItems:"center"}}>
                <AddCardIcon style={{fontSize:"25px",color:"rgb(85, 85, 85)"}}/>
                <p style={{fontSize:"20px", fontWeight:"bold", marginLeft:"10px",color:"rgb(85, 85, 85)"}}>Total Menu</p>
                </div>
                <p style={{fontSize:"35px", fontWeight:"bold", marginTop:"8px",color:"rgb(85, 85, 85)"}}>$ 1305K</p>
            </div>
            
           
           
           
           
            
          </div>
          <SimpleChart1/>
        </div>
      </div>
      <div className="">
        2nd part
      </div>
    </div>
  );
}

export default Dashboard;
