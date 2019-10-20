import 'package:flutter/cupertino.dart';
import 'package:operacao_natal_comunicode/home/home_contract.dart';
import 'package:firebase_auth/firebase_auth.dart';

class HomePresenter implements HomePresenterContract {
  HomeViewContract _homeView;

  PageController _controller;

  void onDrawerTileClick(int page) {
    _controller.jumpToPage(page);
  }

  static final HomePresenter instance = HomePresenter.internal();

  factory HomePresenter() => instance;

  HomePresenter.internal();

  set loginView(HomeViewContract value) {
    _homeView = value;
  }

  @override
  void onSignOut() {
    FirebaseAuth.instance.signOut();
    _homeView.showLoginScreen();
  }
}
