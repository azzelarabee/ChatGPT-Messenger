import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                    <div>{/*modelselection*/}</div>
                    
                    {/* map through thre cartows*/}
                </div>
            </div>
        </div>
);
} 
 
export default SideBar;