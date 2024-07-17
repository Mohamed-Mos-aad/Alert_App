import { ReactNode } from 'react';
import './index.scss'
import { X } from 'lucide-react';

interface IProps{
    id: string;
    type: string;
    icon: ReactNode;
    title: string;
    description: string;
    setDeleteId: (id:string)=> void;
}


export default function Alert({id,type,icon,title,description,setDeleteId}:IProps) {
    return (
        <div className={type}>
            <div className='alert-header'>
                <div className="title">
                    {icon}
                    <h4>{title}</h4>
                </div>
                <X onClick={()=>{
                    setDeleteId(id);
                }}/>
            </div>
            <p>{description}</p>
        </div>
    )
}
    