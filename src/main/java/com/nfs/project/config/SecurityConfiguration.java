package com.nfs.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
// import PathRequest
// import org.springframework.security.web.util.matcher.PathRequest;

import com.nfs.project.filters.JwtAuthenticationFilter;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

  private final JwtAuthenticationFilter jwtAuthFilter;
  private final AuthenticationProvider authenticationProvider;
  private final LogoutHandler logoutHandler;

  

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    
      http.cors();
      http
          .csrf().disable()
          .authorizeHttpRequests()
          .requestMatchers("/","/index.html", "/static/**","/**",
              "/*.ico", "/*.json", "/*.png", "/api/user")
          .permitAll()
          .requestMatchers("/api/v1/auth/**").permitAll()
          .requestMatchers("/api/v1/app/**").authenticated()
          .and()
          .sessionManagement()
          .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
          .and()
          .authenticationProvider(authenticationProvider)
          .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
          .logout()
          .logoutUrl("/api/v1/auth/logout")
          .addLogoutHandler(logoutHandler)
          .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
          // sout the url of the request
          .logoutSuccessUrl("/api/v1/auth/logout")
          .and()
          .exceptionHandling()
          .authenticationEntryPoint((request, response, authException) -> response.sendError(HttpServletResponse.SC_NOT_FOUND));
      return http.build();
  }

}
