import filesize from 'filesize';
import React, { Fragment, useMemo } from 'react';
import Dropzone from 'react-dropzone';
import { Container, Content, DropContainer, UploadMessage } from './styled';

export default function Upload({ onUpload, file }) {
  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  const dragmsg = (isDragReject, file) => {
    if (isDragReject) {
      return <UploadMessage type="error">ARQUIVO NÃO SUPORTADO</UploadMessage>;
    }
    if (file) {
      return (
        <UploadMessage type="success">
          {file.name} {<br></br>}
          {filesize(file.size)}
        </UploadMessage>
      );
    }
    return <UploadMessage> CLIQUE OU ARRASTE A FOTO</UploadMessage>;
  };

  return (
    <Fragment>
      <Container>
        <Content>
          <Dropzone accept="image/*" onDropAccepted={onUpload}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
              <DropContainer
                {...getRootProps()}
                isDragActive={isDragActive}
                isDragReject={isDragReject}
              >
                <input {...getInputProps()} />
                <Container>
                  <img
                    src={preview}
                    alt={file ? 'img-prev' : ''}
                    className={file ? 'img-prev' : ''}
                  />
                </Container>

                {dragmsg(isDragReject, file)}
              </DropContainer>
            )}
          </Dropzone>
        </Content>
      </Container>
    </Fragment>
  );
}
