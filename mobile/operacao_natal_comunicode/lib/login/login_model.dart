import 'package:operacao_natal_comunicode/login/login_contract.dart';

class LoginViewModel {
  String _idn = "";
  String _password = "";

  set idn(String text) {
    _idn = text;
  }

  get idn => _idn;

  set password(String text) {
    _password = text;
  }

  get password => _password;

  @override
  String toString() {
    // TODO: implement toString
    return "LoginViewModel(idn: $_idn, password: $password)";
  }
}
