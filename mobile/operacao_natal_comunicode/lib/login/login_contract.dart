import 'package:operacao_natal_comunicode/login/login_model.dart';

abstract class LoginViewContract {
  void showHome();
}

abstract class LoginPresenterContract {
  void onSubmitButtonClicked(LoginViewModel model);
}
