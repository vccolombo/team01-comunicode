import 'package:flutter/material.dart';
import 'package:operacao_natal_comunicode/home/home_page.dart';
import 'package:operacao_natal_comunicode/home/home_presenter.dart';
import 'package:operacao_natal_comunicode/login/login_contract.dart';
import 'package:operacao_natal_comunicode/login/login_model.dart';
import 'package:operacao_natal_comunicode/login/login_presenter.dart';
import 'package:operacao_natal_comunicode/pages/newsletter_list.dart';

class LoginPage extends StatefulWidget {
  final LoginPresenter presenter;

  LoginPage(this.presenter);

  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> implements LoginViewContract {
  LoginViewModel _viewModel;

  final TextEditingController _idnController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  FocusNode _passwordFocus;

  @override
  void initState() {
    super.initState();
    widget.presenter.loginView = this;
    _viewModel = LoginViewModel();
    _passwordFocus = FocusNode();
  }

  @override
  void dispose() {
    super.dispose();
    _passwordFocus.dispose();
  }

  @override
  void showHome() {
    Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => HomeScreen(HomePresenter.instance),
        ));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
            padding: EdgeInsets.all(16.0),
            child: Form(
                child: Column(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.only(top: 70.0, bottom: 32.0),
                  child: Image.asset('images/logo_login.png'),
                ),
                TextFormField(
                  controller: _idnController,
                  decoration: InputDecoration(labelText: "IDN"),
                  onChanged: (text) {
                    _viewModel.idn = text;
                  },
                  textInputAction: TextInputAction.next,
                  onFieldSubmitted: (_) {
                    FocusScope.of(context).requestFocus(_passwordFocus);
                  },
                ),
                TextFormField(
                  controller: _passwordController,
                  focusNode: _passwordFocus,
                  decoration: InputDecoration(labelText: "Password"),
                  onChanged: (text) {
                    _viewModel.password = text;
                  },
                  onFieldSubmitted: (_) {
                    widget.presenter.onSubmitButtonClicked(_viewModel);
                  },
                  obscureText: true,
                ),
                Padding(
                    padding: EdgeInsets.only(top: 16.0),
                    child: Center(
                        child: FlatButton(
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15.0)),
                      color: Theme.of(context).accentColor,
                      child: Text(
                        "Entrar",
                        style: TextStyle(
                          fontSize: 25.0,
                          color: Colors.white,
                        ),
                      ),
                      onPressed: () {
//                        showHome();
                        widget.presenter.onSubmitButtonClicked(_viewModel);
                      },
                    )))
              ],
            ))));
  }
}
