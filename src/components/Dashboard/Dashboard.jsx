
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/b1.jpg';
import '../../style/index.less';
import globalConfig from '../../config';
import ajax from '../../utils/ajax';
import EchartsProjects2 from './EchartsProjects2';


class Dashboard extends React.PureComponent {
    constructor(props){
      super();
      this.state = {
        taskCount : null,
        successTaskCount : null,
        failTaskCount : null,
      }
    }

  async componentDidMount(){
      this.getTaskCount();
      this.getSuccessCount();
      this.getFailCount();
  }

  render() {
      return (
          <div className="gutter-example button-demo">
              <BreadcrumbCustom />
              <Row gutter={11}>
                <Col className="gutter-row" md={5}>
                  <div className="gutter-box">
                    <Card bordered={false}>
                      <div className="clear y-center">
                        <div className="pull-left mr-m">
                          <Icon type="plus" className="text-2x text-danger" />
                        </div>
                        <div className="clear">
                          <div className="text-muted">任务总数</div>
                          <h2>{this.state.taskCount}</h2>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
                  <Col className="gutter-row" md={5}>
                      <div className="gutter-box">
                          <Card bordered={false}>
                              <div className="clear y-center">
                                  <div className="pull-left mr-m">
                                      <Icon type="check-circle" className="text-2x" />
                                  </div>
                                  <div className="clear">
                                      <div className="text-muted">今日成功</div>
                                      <h2>{this.state.successTaskCount}</h2>
                                  </div>
                              </div>
                          </Card>
                      </div>
                  </Col>
                  <Col className="gutter-row" md={5}>
                      <div className="gutter-box">
                          <Card bordered={false}>
                              <div className="clear y-center">
                                  <div className="pull-left mr-m">
                                      <Icon type="close-circle" className="text-2x text-info" />
                                  </div>
                                  <div className="clear">
                                      <div className="text-muted">今日失败</div>
                                      <h2>{this.state.failTaskCount}</h2>
                                  </div>
                              </div>
                          </Card>
                      </div>
                  </Col>
                  <Col className="gutter-row" md={12}>
                      <div className="gutter-box">
                          <Card bordered={false} className={'no-padding'}>
                              <EchartsProjects2 />
                          </Card>
                      </div>
                  </Col>
                <Col className="gutter-row" md={12}>
                  <div className="gutter-box">
                    <Card bordered={false} className={'no-padding'}>
                      <EchartsProjects />
                    </Card>
                  </div>
                </Col>
              </Row>
              <Row gutter={10}>
                  <Col className="gutter-row" md={8}>
                      <div className="gutter-box">
                          <Card bordered={false}>
                              <div className="pb-m">
                                  <h3>任务</h3>
                                  <small>10个已经完成，2个待完成，1个正在进行中</small>
                              </div>
                              <a className="card-tool"><Icon type="sync" /></a>
                              <Timeline>
                                  <Timeline.Item color="green">新版本迭代</Timeline.Item>
                                  <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                                  <Timeline.Item color="red">
                                      <p>联调接口</p>
                                      <p>功能验收</p>
                                  </Timeline.Item>

                                  <Timeline.Item color="#108ee9">
                                      <p>登录功能设计</p>
                                      <p>权限验证</p>
                                      <p>页面排版</p>
                                  </Timeline.Item>
                              </Timeline>
                          </Card>
                      </div>
                  </Col>
                  {/*<Col className="gutter-row" md={8}>*/}
                      {/*<div className="gutter-box">*/}
                          {/*<Card bordered={false}>*/}
                              {/*<div className="pb-m">*/}
                                  {/*<h3>动态</h3>*/}
                              {/*</div>*/}
                              {/*<a className="card-tool"><Icon type="sync" /></a>*/}
                              {/*<ul className="list-group no-border">*/}
                                  {/*<li className="list-group-item">*/}
                                      {/*<a href="" className="pull-left w-40 mr-m">*/}
                                          {/*<img src={b1} className="img-responsive img-circle" alt="test" />*/}
                                      {/*</a>*/}
                                      {/*<div className="clear">*/}
                                          {/*<a href="" className="block">功能</a>*/}
                                          {/*<span className="text-muted">开发中</span>*/}
                                      {/*</div>*/}
                                  {/*</li>*/}
                                  {/*<li className="list-group-item">*/}
                                      {/*<a href="" className="pull-left w-40 mr-m">*/}
                                          {/*<img src={b1} className="img-responsive img-circle" alt="test" />*/}
                                      {/*</a>*/}
                                      {/*<div className="clear">*/}
                                          {/*<a href="" className="block">bug</a>*/}
                                          {/*<span className="text-muted">暂无</span>*/}
                                      {/*</div>*/}
                                  {/*</li>*/}
                                  {/*<li className="list-group-item">*/}
                                      {/*<a href="" className="pull-left w-40 mr-m">*/}
                                          {/*<img src={b1} className="img-responsive img-circle" alt="test" />*/}
                                      {/*</a>*/}
                                      {/*<div className="clear">*/}
                                          {/*<a href="" className="block">进展</a>*/}
                                          {/*<span className="text-muted">暂无</span>*/}
                                      {/*</div>*/}
                                  {/*</li>*/}
                              {/*</ul>*/}
                          {/*</Card>*/}
                      {/*</div>*/}
                  {/*</Col>*/}
                <Col className="gutter-row" md={8}>
                  <div className="gutter-box">
                    <Card bordered={false}>
                      <div className="pb-m">
                        <h3>cpu监控曲线</h3>
                        <small>cpu监控</small>
                      </div>
                      <a className="card-tool"><Icon type="sync" /></a>
                      <EchartsViews />
                    </Card>
                  </div>
                </Col>
                  <Col className="gutter-row" md={8}>
                      <div className="gutter-box">
                          <Card bordered={false}>
                              <div className="pb-m">
                                  <h3>内存监控曲线</h3>
                                  <small>内存监控</small>
                              </div>
                              <a className="card-tool"><Icon type="sync" /></a>
                              <EchartsViews />
                          </Card>
                      </div>
                  </Col>
              </Row>
          </div>
      )
  }

  //获取所有任务数量
  async getTaskCount() {
    const res =  await ajax.countTask();
    this.setState({
      taskCount : res.data,
     })
  }

  //获取当日成功的任务数量
  async getSuccessCount(){
    const res = await ajax.countSuccess();
    this.setState({
      successTaskCount : res.data,
    })
  }

  //获取当日失败的任务数量
  async getFailCount(){
    const res = await ajax.countFail();
    this.setState({
      failTaskCount : res.data,
    })
  }

}

export default Dashboard;
