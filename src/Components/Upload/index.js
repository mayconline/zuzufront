import React, {Component, Fragment} from 'react';

import Dropzone from 'react-dropzone';
import {DropContainer , UploadMessage , Container, Content} from './styled';
import filesize from 'filesize';

export default class Upload extends Component {

    dragmsg =( isDragReject,file)=>{
       
        if(isDragReject){
            return <UploadMessage type='error'>ARQUIVO NÃO SUPORTADO</UploadMessage>
        }
        if(file){
            return <UploadMessage type='success'>{file.name} {<br></br>}
                                                         {filesize(file.size)}    
                                                    </UploadMessage>
        }
        return <UploadMessage> CLIQUE OU ARRASTE A FOTO</UploadMessage>
    };


    render(){

        const {onUpload, file} = this.props
      
        return (
            <Fragment>
                <Container>
                <Content>

                <Dropzone accept='image/*' onDropAccepted={onUpload}>
                 {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
                    
                    <DropContainer 
                        {...getRootProps()}
                         isDragActive={isDragActive}
                        isDragReject={isDragReject} 
                     >
                            <input {...getInputProps()} />
                            
                            {this.dragmsg(isDragReject, file)}
                    </DropContainer>
                    
                      
                 )}  
            </Dropzone> 

            </Content>
               
             
               </Container>
   
               </Fragment>
        )}

}