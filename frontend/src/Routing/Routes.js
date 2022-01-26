import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sidebar from '../components/nav/Sidebar'
import TopNav from '../components/nav/TopNav'
import { CollectionOne } from '../pages/collection-one'
import TankWars from '../pages/collections/Fantom/TankWars'
import StonkSociety from '../pages/collections/Fantom/StonkSociety'
import {
  CollectionTwo,
  TankWars2,
  Spiritopoly2,
  AuguryFinance2,
} from '../pages/collection-two'

import Team from '../pages/Team'
import About from '../pages/About'
import Container from 'react-bootstrap/Container'

const Routes = () => {
  /*
      setting the sidebar state in App as we are using 2 navs - topnav and sidenav
      both the components share the same  state.
      */

  const [sidebar, setSidebar] = useState(false)
  const sidebarToggle = () => setSidebar(!sidebar)

  /* exclusively for mobile devices.
       this function is used for closing the nav on mobile screen
       once any menu item is clicked in the nav
       */

  const closeSidebar = (e) => {
    if (sidebar == true) {
      setSidebar(false)
    }
  }

  return (
    <>
      <TopNav sidebarToggle={sidebarToggle} showSidebar={sidebar} />
      <Container>
        <Row>
          <Col lg={3} xl={3} xxl={2}>
            <Sidebar
              showSidebar={sidebar}
              closeSidebar={closeSidebar}
              sidebarToggle={sidebarToggle}
            />
          </Col>
          <Col xs={12} s={12} md={12} lg={9} xl={9} xxl={10}>
            <Switch>
              {/* Fantom Active Projects */}
              <Route path='/fantom' exact component={CollectionOne} />
              <Route path='/fantom/tankwars' exact component={TankWars} />
              <Route
                path='/fantom/stonksociety'
                exact
                component={StonkSociety}
              />
              {/* <Route path='/collection-one/spiritopoly' exact component={Spiritopoly} />
              <Route path='/collection-one/auguryfinance' exact component={AuguryFinance} /> */}

              {/* Avalanche Active Projects */}
              <Route path='/avalanche' exact component={CollectionTwo} />
              <Route path='/avalanche/tankwars' exact component={TankWars2} />
              <Route
                path='/avalanche/spiritopoly'
                exact
                component={Spiritopoly2}
              />
              <Route
                path='/avalanche/auguryfinance'
                exact
                component={AuguryFinance2}
              />

              {/*Other app routes */}
              <Route path='/contact' exact component={Team} />
              <Route path='/about' exact component={About} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Routes
