import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="welcome-text">
          百川timerx定时任务调度系统V1.0.
          <br />
          百川admin管理后台链接: <a target="_blank" href="http://train.xiaojukeji.com/admin-index/#/">http://train.xiaojukeji.com/admin-index/#/</a>
        </h1>
        <br />

      </div>
    );
  }

}

export default Welcome;
