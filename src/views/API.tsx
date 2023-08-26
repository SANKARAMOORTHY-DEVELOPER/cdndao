import { Button, Input } from '@mantine/core';
import React from 'react';
import { BsInputCursorText } from 'react-icons/bs';
import { LukToolTip } from '../component/LukToolTip';

const API = () => {
    return (
        <div className="w-full h-[calc(100%-3rem)] grid grid-cols-12">
            <div
                className={
                    "col-span-3 h-full border-r border-dark-600 flex flex-col pr-3"
                }
            >
                <h2 className="text-md mb-2 w-full pb-3">API DEFINITIONS</h2>
                <Input
                    icon={<BsInputCursorText></BsInputCursorText>}
                    placeholder="API"
                    rightSection={LukToolTip("API")}
                />
                <Input
                    icon={<BsInputCursorText></BsInputCursorText>}
                    placeholder="API ENDPOINT"
                    rightSection={LukToolTip("API ENDPOINT")}
                />
                <Input
                    icon={<BsInputCursorText></BsInputCursorText>}
                    placeholder="API KEY"
                    rightSection={LukToolTip("API KEY")}
                />
                <div className="px-5 py-3 flex ">
                    <Button >
                        File Upload
                    </Button>
                </div>

            </div>




        </div>
    );
};

export default API;
