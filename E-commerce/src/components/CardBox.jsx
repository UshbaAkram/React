import {Card, CardBody, CardHeader } from "react-bootstrap";

const CardBox = () => {
    return ( 
        <Card style={{ width: '18rem' }}>
            <CardHeader>
                <h1>card head</h1>
            </CardHeader>
            <CardBody>
                Body
            </CardBody>
        </Card>
     );
}
 
export default CardBox;