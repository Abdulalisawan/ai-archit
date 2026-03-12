import React from 'react';
import Projectheader from '../_shared/Projectheader';
import ProjectSetting from '../_shared/ProjectSetting';
import Uiux from '../_shared/Uiux';


const page = () => {
    return (
        <div className=''>
            <Projectheader></Projectheader>
            <div className="flex gap-3">
                <div className=" text-white border-gray-600  border-r h-[90vh]  w-[320px]">
                    <ProjectSetting></ProjectSetting>
                </div>
                <div className='flex-1'>
                    <Uiux></Uiux>
                </div>
            </div>
            
        </div>
    );
};

export default page;