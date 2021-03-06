import React, {useState} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {
  Container,
  CustomInput,
  TittleLogin,
  TextCustom,
  TextMini,
  LoginButton,
  LoginText,
  TextQuestionSignUp,
  TextSeparator,
  CheckBoxView,
  EyePosition,
} from './styled';

import {CustomCheckBox} from './checkBoxTemplate';
import {Link} from '@react-navigation/native';
//import {AuthenticationMethod} from '../AutthenticationMethod';
import {CreateUser} from '../AutthenticationMethod/CreateUser';
/* import {GoogleSignin} from '@react-native-google-signin/google-signin'; */
/* import auth from '@react-native-firebase/auth'; */
import {GoogleButton} from '../AutthenticationMethod/GoogleButton';
import {ShowUnshowEye} from '../ShowUnshowEye';

/* GoogleSignin.configure({
  webClientId:
    '371992773976-3e25baika1uqn078iup4kfaujso12ko6.apps.googleusercontent.com',
}); */

export const SignUpScreen = ({navegacion}) => {
  const [emailFullInput, setEmailFullInput] = useState(false);
  const [passwordFullInput, setPasswordFullInput] = useState(false);
  const [userNameFullInput, setUserNameFullInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  /*   async function onGoogleButtonPress() {
    // GoogleSignin.signOut();
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log(idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential);
  }
 */
  return (
    <ScrollView>
      <TittleLogin>Sign Up</TittleLogin>
      <Container>
        <TextCustom>Please enter your name *</TextCustom>
        <CustomInput
          placeholder="Enter your name. ej: Shigeru Miyamoto"
          onChangeText={userName => {
            setUserName(userName);
            setUserNameFullInput(true);
          }}
        />
        <TextCustom>
          Email *
          {error ? <Text style={styles.errorText}> {error} </Text> : null}
        </TextCustom>

        <CustomInput
          placeholder="Put your email. ej: @gmail.com, @outlook.com"
          onChangeText={email => {
            setEmail(email);
            setEmailFullInput(true);
          }}
        />

        <TextCustom>Password *</TextCustom>

        <CustomInput
          placeholder="Top secret password"
          password={true}
          onChangeText={password => {
            setPassword(password);
            setPasswordFullInput(true);
          }}
          secureTextEntry={!showPassword}
        />

        <EyePosition>
          {' '}
          {/* we made this in order to position the eye icon button correctly in this screen */}
          <ShowUnshowEye
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
        </EyePosition>

        {/*     <Eye>
          <TouchableHighlight
            onPress={() => {
              setShowPassword(!showPassword);
              console.log(showPassword);
            }}>

            <Icon
              name={showPassword ? 'eye-slash' : 'eye'}
              size={20}
              color="#C1C1C1"
            />
          </TouchableHighlight>
        </Eye> */}
        <TextMini>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </TextMini>
      </Container>
      <CheckBoxView>
        <CustomCheckBox Title={'I agree to the Terms and Privacy Policy.'} />
        <CustomCheckBox Title={'Subscribe for select product updates.'} />
      </CheckBoxView>

      <LoginButton
        disabled={
          emailFullInput && passwordFullInput && userNameFullInput
            ? false
            : true
        }
        style={
          emailFullInput && passwordFullInput && userNameFullInput
            ? styles.loginEnabled
            : styles.loginDisabled
        }
        onPress={() => {
          setLoading(true);
          setLoading(CreateUser(email, password, navegacion, setError));
          console.log(loading);
        }}>
        <LoginText>Sign up</LoginText>
      </LoginButton>

      <TextSeparator>Or</TextSeparator>

      <GoogleButton navegacion={navegacion} />
      {/*    <LoginButton
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Signed in with Google!'))
            .catch(error => console.log(error))
        }>
        <ImageGoogle source={require('../../library/Image/google.png')} />

        <LoginText>Sign Up with Google</LoginText>
      </LoginButton> */}

      <TextQuestionSignUp>
        {'Already have an account? '}
        <Link
          style={styles.underline}
          to={{screen: 'Login', params: {navegacion: navegacion}}}>
          {' '}
          Login{' '}
        </Link>
      </TextQuestionSignUp>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline', color: '#5c6ef8'},
  loginEnabled: {backgroundColor: '#5c6ef8'},
  loginDisabled: {backgroundColor: '#c1c1c1'},
  errorText: {color: 'red', fontSize: 10},
});
