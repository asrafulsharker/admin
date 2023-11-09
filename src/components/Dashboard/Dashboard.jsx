import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddCardIcon from '@mui/icons-material/AddCard';
import SimpleChart1 from '../Chart/Simplechart1'
import SimpleChart2 from '../Chart/SimpleChart2'


function Dashboard() {
    return (
        <div style={{ display: "flex", marginTop: "8px", marginLeft: "5px" }}>
            <div className="" style={{ width: "70%" }}>
                <div className="dashboardNav" style={{ marginLeft: "auto" }}>
                    <div style={{ backgroundColor: "#FFFF", padding: "5px", borderRadius: "5px", display: "flex", justifyContent: "flex-end", boxShadow: "initial" }}>
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
                        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#44a08d", borderRadius: "5px", color: "#FFFF" }}>
                            <InputLabel id="month-label" style={{ color: "#FFFF" }}>January</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                label="Month"
                                style={{ color: "#FFFF" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>January</MenuItem>
                                <MenuItem value={2}>February</MenuItem>
                                {/* Add other months as needed */}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "#44a08d", borderRadius: "5px" }}>
                            <InputLabel id="year-label" style={{ color: "#FFFF" }}>2023</InputLabel>
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
                    <div className="boxOrderBAdge" style={{ display: "flex", marginTop: "8px" }}>
                        <div className="boxBadge" style={{ backgroundColor: "rgb(255, 185, 185)", marginRight: "5px", padding: "15px", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center" }}>
                                <AddCardIcon style={{ fontSize: "25px", color: "rgb(85, 85, 85)" }} />
                                <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", color: "rgb(85, 85, 85)" }}>Total Revinew</p>
                            </div>
                            <p style={{ fontSize: "35px", fontWeight: "bold", marginTop: "8px", color: "rgb(85, 85, 85)" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "rgb(185, 225, 255)", marginRight: "5px", padding: "15px", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center" }}>
                                <AddCardIcon style={{ fontSize: "25px", color: "rgb(85, 85, 85)" }} />
                                <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", color: "rgb(85, 85, 85)" }}>Total Scan</p>
                            </div>
                            <p style={{ fontSize: "35px", fontWeight: "bold", marginTop: "8px", color: "rgb(85, 85, 85)" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "rgb(185, 255, 221)", marginRight: "5px", padding: "15px", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center" }}>
                                <AddCardIcon style={{ fontSize: "25px", color: "rgb(85, 85, 85)" }} />
                                <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", color: "rgb(85, 85, 85)" }}>Total Order</p>
                            </div>
                            <p style={{ fontSize: "35px", fontWeight: "bold", marginTop: "8px", color: "rgb(85, 85, 85)" }}>$ 1305K</p>
                        </div>
                        <div className="boxBadge" style={{ backgroundColor: "rgb(255, 185, 220)", marginRight: "5px", padding: "15px", borderRadius: "5px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                            <div className="semiboxBadge" style={{ display: "flex", alignItems: "center" }}>
                                <AddCardIcon style={{ fontSize: "25px", color: "rgb(85, 85, 85)" }} />
                                <p style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "10px", color: "rgb(85, 85, 85)" }}>Total Menu</p>
                            </div>
                            <p style={{ fontSize: "35px", fontWeight: "bold", marginTop: "8px", color: "rgb(85, 85, 85)" }}>$ 1305K</p>
                        </div>

                    </div>
                    {/* at a glance  */}

                    <div className="" style={{ backgroundColor: "#FFFF", borderRadius: "5px", padding: "10px", marginTop: "8px" }}>
                        <p style={{ fontSize: "30px", fontWeight: "bold", }}>At a Glance</p>

                        <div className="atAGlance" style={{ backgroundColor: "#FFFF", borderRadius: "5px", display: "flex" }}>
                            <div style={{ width: '600px', height: '300px', border: "1px solid black", borderRadius: "5px", flexGrow: "1", marginRight: "5px" }}>
                                <SimpleChart1 />
                            </div>
                            <div style={{ width: '600px', height: '300px', border: "1px solid black", borderRadius: "5px", flexGrow: "1", marginLeft: "5px" }}>
                                <SimpleChart2 />
                            </div>
                        </div>
                    </div>

                    <div className="" style={{ backgroundColor: "#FFFF", borderRadius: "5px", padding: "10px", marginTop: "8px" }}>
                        <p style={{ fontSize: "30px", fontWeight: "bold", marginBottom: "5px" }}>Order Rate</p>

                        <div className="atAGlance" style={{ backgroundColor: "#FFFF", borderRadius: "5px", display: "flex" }}>
                            <div style={{ width: '100%', height: '400px', border: "1px solid black", borderRadius: "5px", flexGrow: "1", marginRight: "5px" }}>
                                <SimpleChart1 />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="" style={{ padding: "5px", backgroundColor: "", borderRadius: "5px",width:"100%", marginLeft:"5px"}}>
                <div className="recentOrder">
                    <p style={{ fontSize: "25px", fontWeight: "bold" }}>Recent Orders</p>
                    <div className="" style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>5 order Requests</p>
                        <p style={{cursor:"pointer", color:"#44a08d"}}>See All</p>
                    </div>
                    <div className="items" style={{border:"1px solid gray",padding:"5px", marginTop:"10px"}}>
                        <div className="itemTable" style={{backgroundColor:"#FFFF", borderRadius:"7px",padding:"8px"}}>
                            <p style={{fontSize:"20px", fontWeight:"bold", color:"black", backgroundColor:"gray",padding:"2px", display:"flex", width:"30%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Table 1</p>
                            <p style={{marginTop:"5px"}}>18 June 2023, 07:29 PM</p>
                            <div className="" style={{display:"flex", justifyContent:"space-between", marginTop:"5px"}}>
                                <p style={{color:"gray", fontSize:"20px",fontWeight:"bold"}}>6 Items</p>
                                <p style={{color:"#44a08d",fontSize:"20px",fontWeight:"bold"}}>$100</p>
                            </div>
                        </div>
                        <div className="itemTable" style={{backgroundColor:"#FFFF", borderRadius:"7px",padding:"8px",marginTop:"5px"}}>
                            <p style={{fontSize:"20px", fontWeight:"bold", color:"black", backgroundColor:"gray",padding:"2px", display:"flex", width:"30%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Table 1</p>
                            <p style={{marginTop:"5px"}}>18 June 2023, 07:29 PM</p>
                            <div className="" style={{display:"flex", justifyContent:"space-between", marginTop:"5px"}}>
                                <p style={{color:"gray", fontSize:"20px",fontWeight:"bold"}}>6 Items</p>
                                <p style={{color:"#44a08d",fontSize:"20px",fontWeight:"bold"}}>$100</p>
                            </div>
                        </div>
                        <div className="itemTable" style={{backgroundColor:"#FFFF", borderRadius:"7px",padding:"8px",marginTop:"5px"}}>
                            <p style={{fontSize:"20px", fontWeight:"bold", color:"black", backgroundColor:"gray",padding:"2px", display:"flex", width:"30%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Table 1</p>
                            <p style={{marginTop:"5px"}}>18 June 2023, 07:29 PM</p>
                            <div className="" style={{display:"flex", justifyContent:"space-between", marginTop:"5px"}}>
                                <p style={{color:"gray", fontSize:"20px",fontWeight:"bold"}}>6 Items</p>
                                <p style={{color:"#44a08d",fontSize:"20px",fontWeight:"bold"}}>$100</p>
                            </div>
                        </div>
                        <div className="itemTable" style={{backgroundColor:"#FFFF", borderRadius:"7px",padding:"8px",marginTop:"5px"}}>
                            <p style={{fontSize:"20px", fontWeight:"bold", color:"black", backgroundColor:"gray",padding:"2px", display:"flex", width:"30%",textAlign:"center",alignItems:"center",justifyContent:"center"}}>Table 1</p>
                            <p style={{marginTop:"5px"}}>18 June 2023, 07:29 PM</p>
                            <div className="" style={{display:"flex", justifyContent:"space-between", marginTop:"5px"}}>
                                <p style={{color:"gray", fontSize:"20px",fontWeight:"bold"}}>6 Items</p>
                                <p style={{color:"#44a08d",fontSize:"20px",fontWeight:"bold"}}>$100</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
