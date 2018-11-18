import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {Col, Row, Form, Input, Button, message} from 'antd';
import * as AddHospitalActions from './AddHospitalActions';

const FormItem = Form.Item;

class AddHospitalForm extends Component {
    constructor(props) {
        super(props);
        this.action = bindActionCreators(AddHospitalActions, props.dispatch);
    }

    onSubmit() {
        const infoForm = this.props.form.getFieldsValue();

        if ((infoForm.name === undefined || infoForm.name === '')
            || (infoForm.ip === undefined || infoForm.ip === '')
            || (infoForm.diseaseList === undefined || infoForm.diseaseList === '')) {
            message.warning("请输入信息！");
        } else {
            this.action.addHospital(infoForm);
        }
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <main className="container">
                <div className="search">
                    <Form horizontal ref="search" className="ant-advanced-search-form">
                        <Row type="flex" gutter={0}>
                            <Col sm={12} offset={6}>
                                <FormItem
                                    label="医疗机构:"
                                    labelCol={{span: 8}}
                                    wrapperCol={{span: 15}}
                                >
                                    <Input placeholder="请输入医疗机构" {...getFieldProps('name')} size="default"/>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} offset={6}>
                                <FormItem
                                    label="IP地址:"
                                    labelCol={{span: 8}}
                                    wrapperCol={{span: 15}}
                                >
                                    <Input placeholder="请输入IP地址" {...getFieldProps('ip')} size="default"/>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} offset={6}>
                                <FormItem
                                    label="疾病列表:"
                                    labelCol={{span: 8}}
                                    wrapperCol={{span: 15}}
                                >
                                    <Input placeholder="请输入疾病" {...getFieldProps('diseaseList')} size="default"/>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} offset={10}>
                                <Button className="button" htmlType="submit" type="primary"
                                        onClick={this.onSubmit.bind(this)}>提交</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </main>
        )
    }

}

export default Form.create()(AddHospitalForm);