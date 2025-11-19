import StaffNavbar from "./components/StaffNavbar";


function StaffDashboard() {
    return(
        <section>
            <StaffNavbar navItemName="Dashboard" />
            <div className="flex flex-row min-h-screen">

                <div className="flex flex-col min-h-screen w-[100%] md:w-[60%] lg:w-[70%] xl:w-[75%] 2xl:w-[80%]">

                    {/** Announcements Part **/}
                    <div className="flex-1 bg-amber-600 w-full">

                        {/** Content for the Announcements column **/}
                        <div className="flex flex-col justify-center">

                            <h1 className="text text-3xl font-bold mt-4 ml-5">Annoucements</h1>

                            <div className="flex flex-col bg-violet-400 h-[350px] w-[80%] overflow-y-auto ml-5 mt-4 mb-4 p-4 rounded-lg">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                                <p>5</p>
                                <p>6</p>
                                <p>7</p>
                                <p>8</p>
                                <p>9</p>
                                <p>10</p>
                                <p>11</p>
                                <p>12</p>
                                <p>13</p>
                                <p>14</p>
                                <p>15</p>
                                <p>16</p>
                                <p>17</p>
                                <p>18</p>
                                <p>19</p>
                                <p>20</p>
                            </div>
                            
                        </div>

                    </div>

                    {/** News Part **/}
                    <div className="flex-1 bg-gray-600 w-full">

                    </div>
                </div>


                {/** Right Side Part **/}
                <div className="hidden md:flex max-h-screen bg-blue-500 md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]">
                    
                </div>

            </div>
        </section>
    )
}

export default StaffDashboard;
