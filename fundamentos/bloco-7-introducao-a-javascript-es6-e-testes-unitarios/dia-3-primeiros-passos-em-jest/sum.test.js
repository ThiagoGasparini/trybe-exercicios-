const { soma, myRemove, myFizzBuzz, encode, decode, techList } = require("./sum");

test("somar 4 e 5 retornando 9", () => {
  expect(soma(4, 5)).toBe(9);
});

test("somar 0 e 0 retornando 0", () => {
  expect(soma(0, 0)).toBe(0);
});

test("somar 4 e '5' retornando erro", () => {
  expect(() => {
    soma(4, "5");
  }).toThrowError(new Error("parameters must be numbers"));
});

test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test("número divisível por 3 e 5 retorna fizzbuzz", () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
});

test("número divisível por 3 retorna fizz", () => {
  expect(myFizzBuzz(9)).toBe("fizz");
});

test("número não divisível por 3 ou 5", () => {
  expect(myFizzBuzz(11)).toBe(11);
});

test("parâmetro que não é um número retorna false", () => {
  expect(myFizzBuzz("1")).toBe(false);
});

describe("Testa a função encode e decode", () => {
  it("a função encode é definida", () => {
    expect(encode).toBeDefined();
  });
  it("encode é uma função", () => {
    expect(typeof encode).toEqual("function");
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode("ana")).toEqual("1n1");
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode("ele")).toEqual("2l2");
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode("xixi")).toEqual("x3x3");
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode("ovo")).toEqual("4v4");
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode("nu")).toEqual("n5");
  });
  it("checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(encode("trybe").length).toEqual(5);
  });

  it("a função decode é definida", () => {
    expect(decode).toBeDefined();
  });
  it("decode é uma função", () => {
    expect(typeof decode).toEqual("function");
  });
  it("converte apenas o número 1 na vogal a", () => {
    expect(decode("1n1")).toEqual("ana");
  });
  it("converte apenas o número 2 na vogal e", () => {
    expect(decode("2l2")).toEqual("ele");
  });
  it("converte apenas o número 3 na vogal i", () => {
    expect(decode("x3x3")).toEqual("xixi");
  });
  it("converte apenas o número 4 na vogal o", () => {
    expect(decode("4v4")).toEqual("ovo");
  });
  it("converte apenas o número 5 na vogal u", () => {
    expect(decode("n5")).toEqual("nu");
  });
  it("checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(decode("trybe").length).toEqual(5);
  });
});

describe("Testa a função techList", () => {
  it("Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});
