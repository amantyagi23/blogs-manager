import { CustomSkelton } from '@/shared/components/CustomSkelton';
import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import React, { Suspense } from 'react'


interface IProps {
    title: string;
    image: string;
    desc: string;
}

const ShowPost: React.FC<IProps> = ({ desc, image, title }) => {
    return (
        <Suspense fallback={<CustomSkelton />}>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardContent>
                    <img src={image} />
                    {desc}
                </CardContent>
            </Card>
        </Suspense>
    )
}

export default ShowPost