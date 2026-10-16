import {useState,useEffect} from "react";
import json from "./data.json";


const List = ({list,addNodeToList}) => {
    const [isExpanded,setIsExpanded] = useState({});
    const handleFolderOpen = (id) => {
        setIsExpanded((prev) => ({
            ...prev,
            [id]:!prev[id]
        }))
    }
  return(
    <div style={{paddingLeft:"10px"}}>
    {
        list.map((node,i) => {
            return(
                <div key={node.id}>
                
                    <div style={{display:"flex",gap:"10px"}}> 
                    {node.isFolder && (<div style={{cursor:"pointer"}} onClick={() => handleFolderOpen(node.id)}>{isExpanded?.[node.id]  ? "-" : " +"}</div>)}
                    <div>{node.name}</div>
                   
                    {
                        node.isFolder && (
                           <span style={{cursor:"pointer"}} onClick={() => addNodeToList(node.id)}> <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrG-enOHEeCv4AJe-Wwcl7QsuEkuP57WN6F9iYu2JoOQ&s`}
                            alt="folder-icon" height="20" width="20" /></span>
                        )
                    }
                     </div>
                  
                 {isExpanded?.[node.id] && node.children && <List list={node.children} addNodeToList={addNodeToList} />}  
                </div>
            )
        })
    }
</div>
  )
}
const FileExplorer = () => {
    const [data,setData] = useState(json);
    console.log(json);

    // const addNodeToList = (parentId) => {
    //     const name = prompt("Enter Name"); 
    //      const updateTree = (list) => {
    //         return list.map((node) => {
    //            if(node.id === parentId){
    //             return {
    //                 ...node,
    //                 children:[
    //                     ...node.children,
    //                     {id:11,name:name,
    //                         isFolder:true,
    //                         children:[]
    //                     }
    //                 ]
    //             }
    //            }
    //         })
    //      }
    //      if(node.children){
    //         return {
    //             ...node,
    //             children:updateTree(node.children)
    //         }
    //         return node;
    //      }
    //      setData((prev) => updateTree(prev));
    // }
    
const addNodeToList = (parentId) => {
    const name = prompt("Enter Name");
  
    if (!name) return;
  
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              {
                id: Date.now(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
  
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children),
          };
        }
  
        return node;
      });
    };
  
    setData((prev) => updateTree(prev));
  };
  
    return(
        <div>
            <h1>File Explorer</h1>
           {data && <List list={data} addNodeToList={addNodeToList} />} 
        </div>
    )

}
export default FileExplorer;