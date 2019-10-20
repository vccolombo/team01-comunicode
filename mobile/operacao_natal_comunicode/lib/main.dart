import 'package:flutter/material.dart';
import 'package:operacao_natal_comunicode/home/home_page.dart';
import 'package:operacao_natal_comunicode/home/home_presenter.dart';
import 'package:operacao_natal_comunicode/login/login_presenter.dart';
import 'package:operacao_natal_comunicode/login/login_view.dart';
import 'package:operacao_natal_comunicode/pages/newsletter_list.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:operacao_natal_comunicode/home/tabs/pontos_tab.dart';

import 'model/user.dart';

void main() async {
  FirebaseUser user = await FirebaseAuth.instance.currentUser();

  runApp(MaterialApp(
    title: "Operação Natal",
    theme: ThemeData(
      primaryColor: Color.fromARGB(255, 65, 111, 84),
      accentColor: Color.fromARGB(255, 162, 50, 52),
      fontFamily: "MontserratRegular",
    ),

    debugShowCheckedModeBanner: false,
    home: user == null
        ? LoginPage(LoginPresenter.instance)
        : HomeScreen(HomePresenter.instance),
//  home: LoginPage(LoginPresenter.instance),
//  home: PontosTab(),
  ));
}
