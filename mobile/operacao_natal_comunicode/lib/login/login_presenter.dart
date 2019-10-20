import 'package:operacao_natal_comunicode/login/login_contract.dart';
import 'package:operacao_natal_comunicode/login/login_model.dart';
import 'package:operacao_natal_comunicode/login/login_view.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:shared_preferences/shared_preferences.dart';

class LoginPresenter implements LoginPresenterContract {
  LoginViewContract _loginView;

  static final LoginPresenter instance = LoginPresenter.internal();

  factory LoginPresenter() => instance;

  LoginPresenter.internal();

  void onSubmitButtonClicked(LoginViewModel model) async {
    if (model.idn.isEmpty || model.password.isEmpty) return;
    DocumentSnapshot snapshot =
        await Firestore.instance.collection('emails').document(model.idn).get();

//    print(await FirebaseAuth.instance.currentUser());
//    return;
    print(snapshot.data["email"]);
    AuthResult result;
    try {
      result = await FirebaseAuth.instance.signInWithEmailAndPassword(
          email: snapshot.data["email"], password: model.password);
      _loginView.showHome();
      final prefs = await SharedPreferences.getInstance();
      final key = 'idn';
      prefs.setString(key, model.idn);
    } catch (e) {
      print(result);
    }
  }

  set loginView(LoginViewContract value) {
    _loginView = value;
  }
}
