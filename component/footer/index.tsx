import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { EmptyRowCol, HrefTargetBlank } from '../common';

import { IFooter } from './IFooter';
import { Style } from '../common/Style';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" />
              {' / '}
              Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              <HrefTargetBlank url="https://nextjs.org/" text="Next.js" /> v{payload.nextVersion}
              {' / '}
              <HrefTargetBlank url="https://reactjs.org/" text="React.js" /> v{payload.reactVersion}
              {' / '}
              <HrefTargetBlank url="https://getbootstrap.com" text="Bootstrap" /> v
              {payload.bootstrapVersion} {/* eslint-disable-next-line jsx-a11y/alt-text */}
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fhyeonseokhan.github.io%2Fresume%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false" />
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
