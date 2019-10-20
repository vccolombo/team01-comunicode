import 'package:flutter/material.dart';
import 'package:operacao_natal_comunicode/model/user.dart';

class EditPerfilTab extends StatefulWidget {
  User editedUser;

  EditPerfilTab(User user) {
    editedUser = User.copy(user);
  }

  @override
  _EditPerfilTabState createState() => _EditPerfilTabState();
}

class _EditPerfilTabState extends State<EditPerfilTab> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Edit perfil"),
          centerTitle: true,
          actions: <Widget>[
            IconButton(
                icon: Icon(Icons.save),
                onPressed: () {
                  Navigator.pop(context);
                })
          ],
        ),
        body: Form(
            child: ListView(
          padding: EdgeInsets.all(16.0),
          children: <Widget>[
            _getLabel("IDN"),
            _getTextField(widget.editedUser.idn, false),
            Container(
              height: 16.0,
            ),
            _getLabel("Time"),
            _getTextField(widget.editedUser.timeString, false),
            Container(
              height: 16.0,
            ),
            _getLabel("Nome Completo"),
            _getTextField(widget.editedUser.nomeCompleto, false),
            Container(
              height: 16.0,
            ),
            _getLabel("Telefone"),
            _getTextField(widget.editedUser.telefone, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Operadora"),
            _getTextField(widget.editedUser.operadora, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Facebook"),
            _getTextField(widget.editedUser.facebook, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Universidade"),
            _getTextField(widget.editedUser.universidade, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Curso"),
            _getTextField(widget.editedUser.curso, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Ano de Ingresso na Universidade"),
            _getTextField(
                widget.editedUser.anoIngressoFaculdade.toString(), true),
            Container(
              height: 16.0,
            ),
            _getLabel("Aniversário"),
            _getTextField(widget.editedUser.aniversario, true),
            Container(
              height: 16.0,
            ),
            _getLabel("Carro Disponível"),
            _getTextField(widget.editedUser.temCarro ? "Sim" : "Não", true),
            Container(
              height: 16.0,
            ),
          ],
        )));
  }

  Widget _getLabel(String text) {
    return Text(text, style: TextStyle(fontSize: 14.0));
  }

  Widget _getTextField(String text, bool editable) {
    return TextFormField(
        initialValue: text,
        enabled: editable,
        style: TextStyle(fontSize: 18.0));
  }
}
