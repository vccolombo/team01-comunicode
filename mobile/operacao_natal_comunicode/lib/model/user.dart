enum Times {
  voluntarios,
  acao_social,
  arrecadacao,
  eventos,
  financeiro,
  logistica,
  marketing,
  qualidade,
  recursos_humanos,
  sacolinhas,
}

class User {
  String idn;
  Times time;
  String nomeCompleto;
  String telefone;
  String operadora;
  String facebook;
  String universidade;
  String curso;
  int anoIngressoFaculdade;
  String aniversario;
  bool temCarro;

  User() {}

  User.fromMap(Map<String, dynamic> map) {
//    idn = map["idn"];
    time = Times.values[map["time"]];
    nomeCompleto = map["nomeCompleto"];
    telefone = map["telefone"];
    operadora = map["operadora"];
    facebook = map["facebook"];
    universidade = map["universidade"];
    curso = map["curso"];
    anoIngressoFaculdade = map["anoIngressoFaculdade"];
    aniversario = map["aniversario"];
    temCarro = map["temCarro"];
  }

  User.copy(User old) {
    time = old.time;
    nomeCompleto = old.nomeCompleto;
    telefone = old.telefone;
    operadora = old.operadora;
    facebook = old.facebook;
    universidade = old.universidade;
    curso = old.curso;
    anoIngressoFaculdade = old.anoIngressoFaculdade;
    aniversario = old.aniversario;
    temCarro = old.temCarro;
  }

  Map<String, dynamic> toMap() {
    return {
      "idn": idn,
      "time": time,
      "nomeCompleto": nomeCompleto,
      "telefone": telefone,
      "operadora": operadora,
      "facebook": facebook,
      "universidade": universidade,
      "curso": curso,
      "anoIngressoFaculdade": anoIngressoFaculdade,
      "aniversário": aniversario,
      "temCarro": temCarro,
    };
  }

  get timeString {
    switch (time) {
      case Times.voluntarios:
        return "Voluntários";
      case Times.acao_social:
        return "Ação Social";
      case Times.arrecadacao:
        return "Arrecadação";
      case Times.eventos:
        return "Eventos";
      case Times.financeiro:
        return "Financeiro";
      case Times.logistica:
        return "Logística";
      case Times.marketing:
        return "Marketing";
      case Times.qualidade:
        return "Qualidade";
      case Times.recursos_humanos:
        return "Recursos Humanos";
      case Times.sacolinhas:
        return "Sacolinhas";
    }
  }
}
