import React, { useEffect, useState } from 'react'
import { Row, Col, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addCRUD, deleteCRUD, getCRUD } from '../CrudAction';
import { HomeOutlined, EditOutlined, DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import CrudForm from '../create/Form';
import CrudDelete from '../delete/Delete';
import CrudUpdate from '../update/Update';

const View = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const crud = useSelector((state) => state?.crud?.crudData.data || []);

  useEffect(() => {
    dispatch(getCRUD());
  }, []);

  const [isVisibleAdd, setIsVisibleAdd] = useState(false);
  const [isVisibleDelete, setIsVisibleDelete] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);

  const crudHead = ['ID', 'Name', 'Gender', 'Edit', 'Delete'];
  const [delId, setDelId] = useState('')

  const handleDeleteOnclick = (id) => {
    setDelId(id);
    setIsVisibleDelete(true);
  }

  const [updateData, setUpdateData] = useState({})

  const handleUpdateOnclick = (data) => {
    setUpdateData(data);
    setIsVisibleUpdate(true);
  };


  return (
    <div className="view">
      <Row className='view-title-row'>
        <Col span="8" className='view-title-col'>
          <div className="view-title"><HomeOutlined className='view-home' onClick={() => history.push('/')} /></div>
        </Col>
        <Col span="8" className='view-title-col'>
          <div className="view-title">CRUD</div>
        </Col>
        <Col span="8" className='view-title-col'>
          <div className="view-title"><PlusCircleOutlined className='view-add' onClick={() => setIsVisibleAdd(true)} />
            <Modal visible={isVisibleAdd} onCancel={() => setIsVisibleAdd(false)} footer={false} ><CrudForm isVisibleAdd={setIsVisibleAdd} /></Modal>
          </div>
        </Col>
      </Row>
      <div className="view-body">
        <Row className="view-row">
          <Row className="view-row-head">
            {crudHead.map(cr => <Col span="4" className='view-col' key={cr}>{cr}</Col>)}
          </Row>
          {crud.map(cr =>
            <Row className="view-row-body" key={cr?.id}>
              <Col span="4" className='view-col'>{cr.id}</Col>
              <Col span="4" className='view-col'>{cr.name}</Col>
              <Col span="4" className='view-col'>{cr.gender}</Col>
              <Col span="4" className='view-col'>
                <div className="view-title-1"><EditOutlined className='view-icon-update' onClick={() => handleUpdateOnclick(cr)} />
                  <Modal visible={isVisibleUpdate} onCancel={() => setIsVisibleUpdate(false)} footer={false} ><CrudUpdate isVisibleUpdate={setIsVisibleUpdate} updateData={updateData} /></Modal>
                </div>
              </Col>
              <Col span="4" className='view-col'>
                <div className="view-title--1"><DeleteOutlined className='view-icon-delete' onClick={() => handleDeleteOnclick(cr.id)} />
                  <Modal visible={isVisibleDelete} onCancel={() => setIsVisibleDelete(false)} footer={false} ><CrudDelete isVisibleDelete={setIsVisibleDelete} deleteId={delId} /></Modal>
                </div>
              </Col>
            </Row>
          )}
        </Row>
      </div>
    </div>
  )
}
export default View;