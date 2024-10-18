import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const CustomOtherIcon = () => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none">
        <Path
          d="M10 11.25C9.38193 11.25 8.77775 11.0667 8.26384 10.7233C7.74994 10.38 7.3494 9.89191 7.11288 9.32089C6.87635 8.74987 6.81447 8.12154 6.93505 7.51534C7.05563 6.90915 7.35325 6.35233 7.79029 5.91529C8.22733 5.47825 8.78415 5.18063 9.39034 5.06005C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5983 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.1241 8.95351 12.7945 9.74782 12.2087 10.3337C11.6228 10.9195 10.8285 11.2491 10 11.25ZM10 6.25C9.62916 6.25 9.26665 6.35997 8.95831 6.566C8.64997 6.77202 8.40964 7.06486 8.26773 7.40747C8.12581 7.75008 8.08868 8.12708 8.16103 8.4908C8.23338 8.85451 8.41195 9.1886 8.67418 9.45083C8.9364 9.71305 9.27049 9.89163 9.63421 9.96397C9.99792 10.0363 10.3749 9.99919 10.7175 9.85728C11.0601 9.71536 11.353 9.47504 11.559 9.1667C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62789 11.6767 7.15129 11.3252 6.79978C10.9737 6.44827 10.4971 6.25055 10 6.25Z"
          fill="#6FCF97"
        />
        <Path
          d="M10 18.75L4.72782 12.5321C4.69788 12.4964 4.51019 12.2499 4.51019 12.2499C3.60951 11.0636 3.1229 9.6145 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61389 16.391 11.0624 15.4908 12.2483L15.4898 12.2499C15.4898 12.2499 15.3023 12.4964 15.2744 12.5295L10 18.75ZM5.50782 11.4969C5.50844 11.4973 5.65369 11.6895 5.68694 11.7309L10 16.8174L14.3188 11.7237C14.3462 11.6892 14.4927 11.4956 14.493 11.4951C15.2288 10.5258 15.6264 9.34195 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.37362 9.34261 4.77156 10.5271 5.50782 11.4969Z"
          fill="#6FCF97"
        />
      </Svg>
    </View>
  )
}

export default CustomOtherIcon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
