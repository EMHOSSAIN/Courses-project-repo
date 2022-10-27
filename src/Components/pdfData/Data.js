import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import JsPDF from 'jspdf'
import logo from '../../Components/pdf.png'
import CourseDetailes from '../Shares/CourseDetailes';

class Data extends Component {
    pdfGenerate = ()=>{
        let doc=new JsPDF('landscape','px','a4','false');
        doc.addPage(<CourseDetailes></CourseDetailes>)

        doc.save('a.pdf')
    }
    render() {
        return(
            <div>
                <Button onClick={this.pdfGenerate} >Download</Button>
            </div>
        )
    }
}
export default Data