import React, { Fragment, useMemo} from 'react';

import Dropzone from 'react-dropzone';
import {DropContainer , UploadMessage , Container, Content} from './styled';
import filesize from 'filesize';

export default function Upload({onUpload, file}){

    const preview = useMemo(
        ()=>{
            return file ? URL.createObjectURL(file):null
        },
        [file]
    )

  const dragmsg =( isDragReject,file)=>{
       
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


    

      
        return (
            <Fragment>
                <Container>
                <Content>
                        {/*se tiver preview da imagem, ele addd a classe img-prev*/}
                <Container>
                <img src={preview} className={file ? 'img-prev':''}/>
                </Container>
                
                
                  
                <Dropzone accept='image/*' onDropAccepted={onUpload}>
                 {({getRootProps, getInputProps, isDragActive, isDragReject})=>(
                    
                    <DropContainer 
                        {...getRootProps()}
                         isDragActive={isDragActive}
                        isDragReject={isDragReject} 
                     >
                            <input {...getInputProps()} />
                            
                            {dragmsg(isDragReject, file)}
                    </DropContainer>
                    
                      
                 )}  
            </Dropzone> 

            </Content>
               
             
               </Container>
   
               </Fragment>
        )
    }

