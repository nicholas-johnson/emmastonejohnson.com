import React from 'react';
import Link from './Link';
import './style.scss';

class Links extends React.Component {
  render() {
    const author = this.props.data


    return (
      <div className="links">
        <ul className="links__list">
          <Link icon='instagram' url='https://www.instagram.com/emmastonejohnson' />
          <Link icon='mail' url='mailto:emma@swoone.co.uk' />
        </ul>
      </div>
    )
  }
}

export default Links
