import 'package:flutter/material.dart';
import 'package:operacao_natal_comunicode/home/home_contract.dart';
import 'package:operacao_natal_comunicode/home/tabs/IdnTab.dart';
import 'package:operacao_natal_comunicode/home/tabs/edit_perfil.dart';
import 'package:operacao_natal_comunicode/home/tabs/notifications_tab.dart';
import 'package:operacao_natal_comunicode/home/tabs/view_perfil_tab.dart';
import 'package:operacao_natal_comunicode/home/tabs/eventos_inscritos_tab.dart';
import 'package:operacao_natal_comunicode/home/tabs/proximos_eventos_tab.dart';
import 'package:operacao_natal_comunicode/home/tabs/newsletter_tab.dart';
import 'package:operacao_natal_comunicode/login/login_presenter.dart';
import 'package:operacao_natal_comunicode/login/login_view.dart';
import 'package:operacao_natal_comunicode/model/user.dart';
import 'package:operacao_natal_comunicode/home/tabs/pontos_tab.dart';

import 'home_presenter.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class DrawerItem {
  String title;
  IconData icon;

  DrawerItem(this.title, this.icon);
}

class HomeScreen extends StatefulWidget {
  final drawerItems = [
    new DrawerItem("Próximos eventos", Icons.assignment),
    new DrawerItem("Eventos inscritos", Icons.assignment_turned_in),
    new DrawerItem("Notificações", Icons.notifications),
    new DrawerItem("Pontos e presenças", Icons.star_border),
    new DrawerItem("Newsletter", Icons.drafts),
    new DrawerItem("IDN - Identificação natalina", Icons.contact_mail),
    new DrawerItem("Contato", Icons.local_phone),
    new DrawerItem("Perfil", Icons.person_outline),
  ];

  HomePresenter presenter;

  HomeScreen(this.presenter);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> implements HomeViewContract {
  final _pageController = PageController();
  User user;

  _met() async {
    final prefs = await SharedPreferences.getInstance();
    final key = 'idn';
    final value = prefs.getString(key) ?? 0;
    DocumentSnapshot snapshot =
        await Firestore.instance.collection("users").document(value).get();
    setState(() {
      user = User.fromMap(snapshot.data);
      user.idn = value;
    });
  }

  @override
  void initState() {
    super.initState();
    _met();

//    await Firestore.instance.collection("users").document()
  }

  int _selectedDrawerIndex = 0;

  _getDrawerItemWidget(int pos) {
    switch (pos) {
      case 0:
        return ProximosEventosTab();
      case 1:
        return EventosInscritosTab();
      case 2:
        return NotificationsTab();
      case 3:
        return PontosTab();
      case 4:
        return NewsletterTab();
      case 5:
        return IdnTab();
      case 6:
        return Container();
      case 7:
        return ViewPerfilTab(user);

      default:
        return new Text("Error");
    }
  }

  _onSelectItem(int index) {
    setState(() {
      _selectedDrawerIndex = index;
    });
    Navigator.of(context).pop();
  }

  @override
  void showLoginScreen() {
    Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => LoginPage(LoginPresenter.instance),
        ));
  }

  @override
  Widget build(BuildContext context) {
    var drawerOptions = <Widget>[];
    for (var i = 0; i < widget.drawerItems.length; i++) {
      var d = widget.drawerItems[i];
      drawerOptions.add(ListTile(
        leading: Icon(d.icon),
        title: Text(d.title),
        selected: i == _selectedDrawerIndex,
        onTap: () => _onSelectItem(i),
      ));
    }

    return Scaffold(
      appBar: AppBar(
        // here we display the title corresponding to the fragment
        // you can instead choose to have a static title
        title: Text(widget.drawerItems[_selectedDrawerIndex].title),
        actions: _selectedDrawerIndex == 7
            ? <Widget>[
                IconButton(
                  icon: Icon(Icons.edit),
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => EditPerfilTab(user)));
                  },
                )
              ]
            : (_selectedDrawerIndex == 2
                ? <Widget>[
                    IconButton(
                      icon: Icon(Icons.filter_list),
                      onPressed: () {},
                    )
                  ]
                : null),
      ),
      drawer: Drawer(
          child: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            UserAccountsDrawerHeader(
                currentAccountPicture: Image.asset("images/rena.png"),
                accountName: Text(
                    "Olá, ${user == null ? "" : user.nomeCompleto.split(' ').first}"),
                accountEmail: null),
            Column(children: drawerOptions),
            ListTile(
              title: Text("Logout"),
              onTap: () async {
                await FirebaseAuth.instance.signOut();
                final prefs = await SharedPreferences.getInstance();
                final key = 'idn';
                prefs.remove(key);
                Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(
                        builder: (context) =>
                            LoginPage(LoginPresenter.instance)));
              },
            )
          ],
        ),
      )),
      body: _getDrawerItemWidget(_selectedDrawerIndex),
    );
  }
}
