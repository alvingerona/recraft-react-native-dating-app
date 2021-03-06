import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { connect } from "react-redux";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import BaseHome from '../pages/BaseHome';
import { ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemedView';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgetPassword from '../pages/ForgetPassword';
import Gender from '../pages/Gender';
import Matching from '../pages/Matching';
import Matched from '../pages/Matched';
import Searching from '../pages/Searching';
import Nearby from '../pages/Nearby';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Calling from '../pages/Calling';

interface Props {
  configReducer: ApplicationConfig
}

const Router: React.FunctionComponent<Props> = ({
  configReducer
}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
          <BackHandlerHOC>
            <Switch>
              <Route exact path="/" component={BaseHome} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/signup/" component={Signup} />
              <Route exact path="/forget/" component={ForgetPassword} />
              <Route exact path="/gender/" component={Gender} />
              <Route exact path="/matching/" component={Matching} />
              <Route exact path="/matched/" component={Matched} />
              <Route exact path="/searching/" component={Searching} />
              <Route exact path="/nearby/" component={Nearby} />
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/edit/" component={EditProfile} />
              <Route exact path="/calling/" component={Calling} />
            </Switch>
          </BackHandlerHOC>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  )
}

export default connect(({ configReducer }) => ({ configReducer }))(Router);

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})

