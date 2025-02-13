import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '@providers/auth/auth';
import { breakpointMin } from '@utils/styleUtils';
import GoogleAuthButton from '@components/auth/auth-buttons/GoogleAuthButton';
import FacebookAuthButton from '@components/auth/auth-buttons/FacebookAuthButton';
import PhotoAttribution from '@components/photo-attribution/PhotoAttribution';
import CardContainer from '@styles/card/CardContainer';

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      auth: bindActionCreators(authActions, dispatch),
    },
  };
};

const RANDOM_NUMBER = Math.floor(Math.random() * 7);

const SignIn = ({ actions }) => {
  const backgrounds = [
    {
      handle: '@dinoreichmuth',
      name: 'Dino Reichmuth',
      url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    },
    {
      handle: '@nilsnedel',
      name: 'Nils Nedel',
      url: 'https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96',
    },
    {
      handle: '@ranasawalha',
      name: 'Rana Sawalha',
      url: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4',
    },
    {
      handle: '@erwanhesry',
      name: 'Erwan Hesry',
      url: 'https://images.unsplash.com/photo-1479888230021-c24f136d849f',
    },
    {
      handle: '@marilark',
      name: 'Charlie Costello',
      url: 'https://images.unsplash.com/photo-1499123785106-343e69e68db1',
    },
    {
      handle: '@agent_illustrateur',
      name: 'Christine Roy',
      url: 'https://images.unsplash.com/photo-1502920514313-52581002a659',
    },
    {
      handle: '@an_ku_sh',
      name: 'Ankush Minda',
      url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
    },
  ];
  const background = backgrounds[RANDOM_NUMBER];

  return (
    <Background imageSource={background.url}>
      <ContentContainer>
        <Logo>
          <svg height="68" viewBox="0 0 390 68" width="390">
            <text
              fill="#e91e63"
              fillRule="evenodd"
              fontFamily="'Ubuntu', sans-serif"
              fontSize="100"
              fontWeight="400"
            >
              <tspan x="28.53" y="67">
                GoPlan
              </tspan>
            </text>
          </svg>
        </Logo>
        <Slogan>
          <svg height="30" viewBox="0 0 260 30" width="260">
            <text
              fill="#e91e63"
              fillRule="evenodd"
              fontFamily="'Ubuntu', sans-serif"
              fontSize="17.5"
              fontWeight="400"
            >
              <tspan x="2" y="20">
                Plan trips together with friends
              </tspan>
            </text>
          </svg>
        </Slogan>
        <LoginButtonContainer>
          <GoogleAuthButton handleSignIn={actions.auth.signInWithGoogleAuth} />
        </LoginButtonContainer>
        <LoginButtonContainer>
          <FacebookAuthButton
            handleSignIn={actions.auth.signInWithFacebookAuth}
          />
        </LoginButtonContainer>
      </ContentContainer>
      <Footer>
        <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
        <FooterLink to="/termsandconditions">Terms and Conditions</FooterLink>
        <PhotoAttribution
          photo={background}
          splashPage={true}
        ></PhotoAttribution>
      </Footer>
    </Background>
  );
};

SignIn.propTypes = {
  actions: PropTypes.object.isRequired,
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${({ imageSource }) => imageSource});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ContentContainer = styled(CardContainer)`
  padding: 40px 20px;
  width: 90%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.85);
  text-align: center;
  overflow: hidden;
  border-radius: 4px;
  margin: 0 auto;

  ${({ theme }) =>
    breakpointMin(
      theme.sizes.medium,
      css`
        width: 100%;
        padding: 40px;
      `,
    )};
`;

const LoginButtonContainer = styled.div`
  margin: 5px auto;
`;

const Logo = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;

  svg {
    width: 100%;
  }
`;

const Slogan = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 30px;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100px;
  background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.4));
  text-align: center;
`;

const FooterLink = styled(Link)`
  margin: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`;

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(SignIn));
