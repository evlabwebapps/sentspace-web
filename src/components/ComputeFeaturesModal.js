import React, {useCallback, useEffect, useState} from "react";
import {Modal, Button, Spinner} from "react-bootstrap";
import FeaturesService from "../services/FeaturesService";


const STATE_MAP = {
  preparing: 'preparing',
  ready: 'sent',
  sent: 'sent',
  failed: 'failed',
  success: 'success',
}


export default function ComputeFeatureModal(props) {
  const [status, setStatus] = useState();
  const [downloadLink, setDownloadLink] = useState();
  const [show, setShow] = useState(true);
  const [intervalId, setIntervalId] = useState();

  const refreshStatus = useCallback(() => {
    if (!props?.requestId) {
      return;
    }
    FeaturesService.retrieveCalculationRequest(props.requestId).then(
      (response) => {
        setStatus(response.data['state']);
        setDownloadLink(response.data['archive_file']);
      }
    );
  }, [props, intervalId]);

  useEffect(() => {
    refreshStatus();
    setShow(true);
    const id = setInterval(refreshStatus, 2000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [props]);

  useEffect(() => {
    if (status === 'success') {
      clearInterval(intervalId);
    }
  }, [status]);

  useEffect(() => setShow(show && props.show), [props.show]);

  return (
    <>
      <Modal.Header>
        <Modal.Title>Request # {props.requestId}</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <p>{ (status !== 'success') && <Spinner size="sm" animation="border" /> } Your request status is {status}.</p>
      </Modal.Body>

      <Modal.Footer style={{ justifyContent: 'flex-start' }}>
        { downloadLink ? (<Button variant="primary" href={downloadLink}>Download</Button>) : <></> }
      </Modal.Footer>
    </>
  );
}