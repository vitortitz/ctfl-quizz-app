export const quizData = [
  {
    question: "Qual das seguintes respostas descreve uma condição de teste?",
    option1: "Uma característica distinta de um componente ou sistema",
    option2:
      "Um aspecto testável de um componente ou sistema identificado como base para os testes",
    option3:
      "O grau em que um produto de software fornece funções que atendem às necessidades declaradas e implícitas quando o software é utilizado sob condições específicas",
    option4:
      "Casos de teste projetados para executar combinações de condições e ações resultantes delas",
    ans: 2,
  },
  {
    question:
      "Qual das seguintes declarações é um objetivo válido para os testes?",
    option1:
      "O teste deve começar o mais tarde possível para o desenvolvimento ter tempo suficiente para criar um bom produto",
    option2:
      "Para validar se o objeto de teste funciona como esperado pelos usuários e outras partes interessadas",
    option3: "Para provar que todos os possíveis defeitos são identificados",
    option4:
      "Para provar que qualquer defeito remanescente não causará nenhuma falha",
    ans: 2,
  },
  {
    question:
      "Qual das seguintes declarações descreve corretamente a diferença entre teste e depuração?",
    option1:
      "Os testes identificam a fonte dos defeitos; a depuração analisa os defeitos e propõe atividades de prevenção",
    option2:
      "Os testes dinâmicos mostram falhas causadas por defeitos; a depuração elimina os defeitos, que são a fonte das falhas",
    option3:
      "Os testes não removem as falhas; mas a depuração remove os defeitos que causam as falhas",
    option4:
      "Os testes dinâmicos previnem as causas das falhas; a depuração remove as falhas",
    ans: 2,
  },
  {
    question:
      "Qual das declarações abaixo descreve a situação mais comum para uma falha descoberta durante os testes ou na produção?",
    option1:
      "O produto falhou quando o usuário selecionou uma opção em uma caixa de diálogo",
    option2:
      "A versão errada de um arquivo de código-fonte compilado foi incluída na compilação",
    option3:
      "O algoritmo de computação utilizou as variáveis de entrada erradas",
    option4:
      "O desenvolvedor interpretou erroneamente a exigência do algoritmo",
    ans: 1,
  },
  {
    question:
      "O Sr. Test tem testado aplicações de software em dispositivos móveis por um período de 5 anos. Ele tem uma grande experiência em testar aplicações móveis e alcança os melhores resultados em um tempo mais curto do que outros. Durante vários meses, o Sr. Test não modificou os casos de testes automatizados existentes e não criou casos de testes. Isso leva a que cada vez menos defeitos sejam encontrados através da execução dos testes. Que princípio de teste o Sr. Test não observou?",
    option1: "Os testes dependem do ambiente",
    option2: "Não é possível realizar testes exaustivos",
    option3: "A repetição dos mesmos testes não encontrará novos defeitos",
    option4: "Defeitos agrupados",
    ans: 3,
  },
  {
    question:
      "De que forma os testes podem ser parte da Garantia de Qualidade?",
    option1: "Ela garante que os requisitos sejam testados",
    option2: "Ela fornece aos desenvolvedores uma lista de bugs",
    option3: "Ela garante que o código seja testado",
    option4: "Ela assegura que os testes sejam suficientes",
    ans: 2,
  },
  {
    question:
      "Qual das seguintes atividades faz parte da atividade principal de análise de teste no processo de teste?",
    option1:
      "Identificação de qualquer infraestrutura e ferramentas necessárias",
    option2: "Criação de conjuntos de teste a partir de scripts de teste",
    option3: "Análise das lições aprendidas para a melhoria do processo",
    option4: "Avaliação da base de teste de testabilidade",
    ans: 4,
  },
  {
    question: `Combine os seguintes produtos de trabalho de teste (1-4) com a descrição correta (A-D):

            1- Conjunto de teste 
    
            "2- Caso de teste 
    
            "3- Roteiro de teste 
    
            "4- Carta de teste 
    
            "A- Um conjunto de scripts de teste a serem executados em uma execução de teste específica 
    
            "B- Um conjunto de instruções para a execução de um teste
    
            "C- Contém os resultados esperados

            "D- Documentação das atividades de teste em testes exploratórios baseados em sessões`,
    option1: "1A, 2C, 3B, 4D",
    option2: "1D, 2B, 3A, 4C",
    option3: "1A, 2C, 3D, 4B",
    option4: "1D, 2C, 3B, 4A",
    ans: 1,
  },
  {
    question:
      "Como os testes caixa-branca podem ser aplicados durante os testes de aceitação?",
    option1:
      "Para verificar se grandes volumes de dados podem ser transferidos entre sistemas integrados",
    option2:
      "Para verificar se todas as declarações de código e caminhos de decisão de código foram executados",
    option3:
      "Verificar se todos os fluxos do processo de trabalho foram cobertos",
    option4: "Para cobrir todas as navegações da página web",
    ans: 3,
  },
  {
    question:
      "Qual das seguintes declarações comparando testes de componentes e testes de sistemas é VERDADEIRA?",
    option1:
      "O teste de componentes verifica a funcionalidade de módulos de software, objetos de programa e classes que são testados separadamente, enquanto o teste de sistema verifica interfaces entre componentes e interações entre diferentes partes do sistema",
    option2:
      "Os casos de teste para teste de componentes são geralmente derivados das especificações de componentes, especificações de projeto ou modelos de dados, enquanto os casos de teste para teste de sistemas são geralmente derivados das especificações de requisitos ou casos de uso.",
    option3:
      "O teste de componentes concentra-se apenas nas características funcionais, enquanto o teste de sistemas concentra-se nas características funcionais e não funcionais",
    option4:
      "Os testes de componentes são de responsabilidade dos testadores, enquanto os testes de sistemas são tipicamente de responsabilidade dos usuários",
    ans: 2,
  },
  {
    question: "Qual das seguintes opções é VERDADEIRA?",
    option1:
      "O objetivo do teste de regressão é verificar se a correção foi implementada com sucesso, enquanto o objetivo do teste de confirmação é confirmar que a correção não tem efeitos colaterais",
    option2:
      "O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o sistema ainda está funcionando em um novo ambiente",
    option3:
      "O objetivo do teste de regressão é detectar efeitos colaterais não intencionais, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido.",
    option4:
      "O objetivo do teste de regressão é verificar se a nova funcionalidade está funcionando, enquanto o objetivo do teste de confirmação é verificar se o defeito original foi corrigido",
    ans: 3,
  },
  {
    question:
      "Qual das seguintes definições é a MELHOR definição de um modelo de desenvolvimento incremental?",
    option1:
      "Definição de requisitos, projeto de software e testes são feitos em fases em que em cada parte do sistema é adicionada",
    option2:
      "Uma fase no processo de desenvolvimento deve começar quando a fase anterior estiver concluída",
    option3:
      "Os testes são vistos como uma fase separada que ocorre após a conclusão do desenvolvimento.",
    option4: "Os testes são adicionados ao desenvolvimento como um incremento.",
    ans: 1,
  },
  {
    question:
      "Qual dos seguintes itens NÃO deve ser um gatilho para testes de manutenção?",
    option1: "Decisão de testar a possibilidade de manutenção do software",
    option2:
      "Decisão de testar o sistema após a migração para uma nova plataforma operacional",
    option3:
      "Decisão de testar se os dados arquivados são possíveis de serem recuperados",
    option4: "1990",
    ans: 1,
  },
  {
    question: "Quais das seguintes opções são papéis em uma revisão formal?",
    option1: "Desenvolvedor, Moderador, Líder de revisão, Revisor, Testador.",
    option2: "Autor, Moderador, Gerente, Revisor, Desenvolvedor.",
    option3: "Autor, Gerente, Líder de revisão, Revisor, Designer.",
    option4: "Autor, Moderador, Líder de revisão, Revisor, Redator.",
    ans: 4,
  },
  {
    question:
      "Quais atividades são realizadas no âmbito do planejamento de uma revisão formal?",
    option1: "Coleta de métricas para a avaliação da eficácia da revisão.",
    option2: "Responder a quaisquer perguntas que os participantes possam ter.",
    option3:
      "Definição e verificação do cumprimento dos critérios de entrada para a revisão",
    option4:
      "Avaliação dos resultados da revisão em relação aos critérios de saída",
    ans: 3,
  },
  {
    question:
      "Qual dos tipos de revisão abaixo é a MELHOR opção para escolher quando a revisão deve seguir um processo formal baseado em regras e listas de verificação?",
    option1: "Revisão Informal",
    option2: "Revisão Técnica",
    option3: "Inspeção",
    option4: "Passagem",
    ans: 3,
  },
  {
    question:
      "Quais das seguintes afirmações sobre testes estáticos são as mais verdadeiras?",
    option1:
      "Os testes estáticos são uma forma barata de detectar e remover defeitos.",
    option2:
      "Os testes estáticos tornam os testes Dinâmicos menos desafiadores",
    option3:
      "Os testes estáticos permitem encontrar problemas de tempo de execução no início do ciclo de vida",
    option4:
      "Ao testar um sistema crítico de segurança, os testes estáticos têm menos valor porque os testes dinâmicos encontram melhor os defeitos.",
    ans: 1,
  },
  {
    question: `Você será convidado para uma revisão. O produto de trabalho a ser revisado é uma descrição do processo de criação de documentos internos. O objetivo da descrição é apresentar a distribuição do trabalho entre os diferentes papéis envolvidos no processo de uma forma que possa ser claramente compreendida por todos.
        
        Você será convidado para uma revisão baseada em checklist. A lista de verificação também será enviada a você. Ela inclui os seguintes pontos:

           I. A pessoa que executa a atividade é claramente identificada para cada atividade?
           II. Os critérios de entrada estão claramente definidos para cada atividade? 
           III. Os critérios de saída estão claramente definidos para cada atividade? 
           IV. Os papéis de apoio e seu escopo de trabalho estão claramente definidos para cada atividade? 
        
        A seguir mostramos um trecho do resultado do trabalho a ser revisado, para o qual você deve utilizar a lista de verificação acima:
        
        "Após verificar a documentação do cliente para verificar se está completa e correta, o arquiteto do software cria a especificação do sistema".
        
        Uma vez que o arquiteto de software tenha concluído a especificação do sistema, ele convida os testadores e verificadores para a revisão. Uma lista de verificação descreve o escopo da revisão. Cada revisor convidado cria comentários de revisão."
        — Se necessário — e conclui a revisão com um comentário oficial de revisão. 
        
        Qual das seguintes declarações sobre sua revisão é correta?`,
    option1:
      "O ponto II da lista de verificação foi violado porque não está claro qual condição deve ser preenchida para convidar para a revisão.",
    option2:
      "Você percebe que além do verificador e do revisor, o validador também deve ser convidado. Como este item não faz parte da sua lista de verificação, você não cria um comentário correspondente.",
    option3:
      "O ponto III da lista de verificação foi violado, pois não está claro o que marca a revisão como concluída.",
    option4:
      "O ponto I da lista de verificação foi violado porque não está claro quem está fornecendo a lista de verificação para o convite para a revisão.",
    ans: 4,
  },
  {
    question: "O que é teste baseado em checklist?",
    option1:
      "Uma técnica de teste na qual os testes são derivados com base no conhecimento do testador sobre falhas do passado, ou conhecimento geral de falhas",
    option2:
      "Uma técnica de teste baseada em uma análise da especificação de um componente ou sistema",
    option3:
      "Uma técnica de teste baseada na experiência em que o testador experiente usa uma lista de itens a serem anotados, verificados ou lembrados, ou um conjunto de regras, ou critérios contra os quais um produto deve ser verificado",
    option4:
      "Uma abordagem aos testes onde os testadores projetam e executam testes dinamicamente baseados em seu conhecimento, exploração do item de teste e nos resultados dos testes anteriores",
    ans: 3,
  },

  // NOVOS ///
  {
    question:
      "Qual das seguintes opções é classificada como uma técnica de teste caixa-preta?",
    option1: "Uma técnica baseada na análise da arquitetura",
    option2:
      "Uma técnica que verifica se o objeto de teste está funcionando de acordo com o projeto detalhado",
    option3:
      "Uma técnica baseada no conhecimento de falhas do passado, ou conhecimento geral de falhas",
    option4: "Uma técnica baseada em requisitos formais",
    ans: 4,
  },

  {
    question: `A seguinte declaração se refere à cobertura de decisões: "Quando o código contém apenas uma única declaração 'se' e sem loops ou declarações CASE, e sua execução não está aninhada dentro do teste, qualquer caso de teste único que executarmos resultará em 50% de cobertura de decisão".
        Qual das seguintes afirmações é correta?`,

    option1:
      "A declaração é verdadeira. Qualquer caso de teste único fornece 100% de cobertura de decisão e, portanto, 50% de cobertura de decisão.",
    option2:
      "A afirmação é verdadeira. Qualquer caso isolado de teste faria com que o resultado da declaração “se” fosse verdadeiro ou falso.",
    option3:
      "A afirmação é falsa. Um único caso de teste só pode garantir uma cobertura de decisão de 25% neste caso.",
    option4:
      "A afirmação é falsa. A declaração é muito ampla. Ela pode estar correta ou não, dependendo do software testado.",
    ans: 2,
  },
  {
    question: "Qual das seguintes é a descrição da cobertura das declarações?",
    option1:
      "É uma métrica, que é a porcentagem de casos de teste que foram executados",
    option2:
      "É uma métrica, que é a porcentagem de declarações no código fonte que foram executadas",
    option3:
      "É uma métrica, que é o número de declarações no código fonte que foram executadas por casos de teste que são aprovados",
    option4:
      "É uma métrica, que dá uma confirmação verdadeira/falsa se todas as declarações são cobertas ou não",
    ans: 2,
  },
  {
    question:
      "Qual declaração sobre a relação entre a cobertura de declarações e a cobertura de decisões é verdadeira?",
    option1:
      "100% de cobertura de decisão também garante 100% de cobertura de declaração",
    option2:
      "100% de cobertura de declaração também garante 100% de cobertura de decisão",
    option3:
      "50% de cobertura de decisão também garante 50% de cobertura de declaração",
    option4: "A cobertura de decisão nunca pode chegar a 100%.",
    ans: 1,
  },
  {
    question:
      "Para qual das seguintes situações é adequado o teste exploratório?",
    option1:
      "Quando a pressão do tempo requer a aceleração da execução de testes já especificados",
    option2:
      "Quando o sistema é desenvolvido de forma incremental, e não há carta de teste disponível",
    option3:
      "Quando houver testadores disponíveis que tenham conhecimento suficiente de aplicações e tecnologias similares",
    option4:
      "Quando já existe um conhecimento avançado do sistema, e é necessário fornecer provas de que ele deve ser testado intensivamente",
    ans: 3,
  },
  {
    question: `O bônus de um funcionário deve ser calculado. Não pode ser negativo, mas pode ser calculado até zero. O bônus é baseado na duração do emprego:
             * menor ou igual a 2 anos
             * mais de 2 anos, mas menos de 5 anos
             * 5 a 10 anos, inclusive
             * mais de 10 anos
            Qual é o número mínimo de casos de teste necessário para cobrir todas as partições de equivalência válidas para o cálculo do bônus?`,
    option1: "3",
    option2: "5",
    option3: "2",
    option4: "4",
    ans: 4,
  },
  {
    question: `Um sistema de controle de velocidade e relatórios tem as seguintes características: 
        
            * Se você dirigir 50 km/h ou menos, nada vai acontecer. 
            * Se você dirigir mais rápido que 50 km/h, mas não mais que 55 km/h, você será avisado. 
            * Se você dirigir mais rápido que 55 km/h, mas não mais que 60 km/h, você será multado. 
            * Se você dirigir a mais de 60 km/h, sua carteira de habilitação será suspensa. - A velocidade em km/h está disponível para o sistema como um valor inteiro. 
        
        Qual seria o conjunto mais provável de valores (km/h) identificado pela aplicação da análise de valores limite, onde apenas os valores nos limites das classes de equivalência são selecionados?`,
    option1: "0, 49, 50, 54, 59, 60",
    option2: "50, 55, 60",
    option3: "49, 50, 54, 55, 60, 62",
    option4: "50, 51, 55, 56, 60, 61",
    ans: 4,
  },
  {
    question: `Os funcionários de uma empresa recebem bônus se trabalharem mais de um ano na empresa e atingirem uma meta que tenha sido acordada individualmente antes. Estes fatos podem ser mostrados em uma tabela de decisão:
        
        Test-ID    |                           |T1  | T2  | T3  | T4
        Condição 1 |Emprego por mais de 1 ano? |YES | NO  | NO  | YES
        Condição 2 |Objetivo acordado?         |NO  | NO  | YES | YES
        Condição 3 |Alcançado o objetivo?      |NO  | NO  | YES | YES
        Ação       |Pagamento de bônus         |NO  | NO  | NO  | YES

        Qual dos seguintes casos de teste representa uma situação que pode acontecer na vida real, e está faltando na tabela de decisão acima?`,
    option1: "Condição 1 = SIM, Condição 2 = NÃO, Condição 3 = SIM, Ação = NÃO",
    option2: "Condição 1 = SIM, Condição 2 = SIM, Condição 3 = NÃO, Ação = SIM",
    option3: "Condição 1 = NÃO, Condição 2 = NÃO, Condição 3 = SIM, Ação = NÃO",
    option4: "Condição 1 = NÃO, Condição 2 = SIM, Condição 3 = NÃO, Ação = NÃO",
    ans: 4,
  },
  {
    question: `Uma aplicação de vídeo tem a seguinte exigência: O aplicativo deve permitir a reprodução de um vídeo na seguinte resolução de tela: 
            
            * 640x480  
            * 1280x720  
            * 1600x1200  
            * 1920x1080   
    
        Qual dos seguintes casos de teste é resultado da aplicação da técnica de teste de equivalência de partição para testar este requisito?`,
    option1:
      "Verificar se a aplicação pode reproduzir um vídeo em uma tela de tamanho 1920x1080 (1 caso de teste)",
    option2:
      "Verificar se a aplicação pode reproduzir um vídeo em um display de tamanho 640x480 e 1920x1080 (2 casos de teste)",
    option3:
      "Verificar se a aplicação pode reproduzir um vídeo em cada um dos tamanhos de exibição na exigência (4 casos de teste)",
    option4:
      "Verificar se a aplicação pode reproduzir um vídeo em qualquer um dos tamanhos de tela na exigência (1 caso de teste)",
    ans: 3,
  },

  {
    question:
      "Qual das seguintes declarações MELHOR descreve como as tarefas são divididas entre o gerente de testes e o testador?",
    option1:
      "O gerente de testes planeja as atividades de teste e escolhe os padrões a serem seguidos, enquanto o testador escolhe as ferramentas e estabelece as diretrizes de uso das ferramentas",
    option2:
      "O gerente de testes planeja, coordena e controla as atividades de teste, enquanto o testador automatiza os testes",
    option3:
      "O gerente de testes planeja, monitora e controla as atividades de teste, enquanto o testador projeta os testes e decide sobre a liberação do objeto de teste",
    option4:
      "O gerente de testes planeja e organiza os testes e especifica os casos de teste, enquanto o testador executa os testes",
    ans: 2,
  },
  {
    question:
      "Qual das seguintes métricas seria a mais útil para monitorar durante a execução do teste?",
    option1: "Porcentagem de casos de teste executados.",
    option2: "Número médio de testadores envolvidos na execução do teste.",
    option3: "Cobertura dos requisitos pelo código fonte.",
    option4: "Porcentagem de casos de teste já criados e revisados.",
    ans: 1,
  },

  {
    question:
      "Qual dos seguintes aspectos pode afetar e fazer parte do planejamento (inicial) do teste?",
    option1: "Limitações orçamentárias",
    option2: "Diário de testes",
    option3: "Taxa de falha",
    option4: "Casos de uso",
    ans: 1,
  },
  {
    question:
      "Qual das listas a seguir contém apenas os critérios típicos de saída dos testes?",
    option1:
      "Medidas de confiabilidade, cobertura do teste, cronograma e status sobre a correção de defeitos e riscos remanescentes",
    option2:
      "Medidas de confiabilidade, cobertura de teste, grau de independência do testador e completude do produto",
    option3:
      "Medidas de confiabilidade, cobertura de teste, custo do teste, disponibilidade do ambiente de teste, tempo de colocação no mercado e completude do produto",
    option4:
      "Tempo para comercialização, defeitos restantes, qualificação do testador, disponibilidade de casos de uso testável, cobertura de teste e custo do teste",
    ans: 1,
  },
  {
    question:
      "Qual dos itens a seguir NÃO está incluído em um relatório resumido de teste?",
    option1:
      "Definição de critérios de aprovação/reprovação e objetivos dos testes",
    option2: "Desvios da abordagem de teste",
    option3: "Medições do progresso real em relação aos critérios de saída",
    option4: "Avaliação da qualidade do objeto de teste",
    ans: 1,
  },
  {
    question: `O projeto desenvolve um termostato de aquecimento "inteligente". Os algoritmos de controle do termostato foram modelados como modelos Matlab/Simulink e executados no servidor conectado à Internet. O termostato usa as especificações do servidor para acionar as válvulas de aquecimento. O gerente de teste definiu a seguinte estratégia/abordagem de teste no plano de teste:
        
        1. O teste de aceite para todo o sistema é executado como um teste baseado na experiência.
        
        2. Os algoritmos de controle no servidor são verificados em relação ao padrão do regulamento de economia de energia.
        
        3. O teste funcional do termostato é executado como um teste baseado em risco.
        
        4. Os testes de segurança de dados/comunicação via internet são executados em conjunto com especialistas externos em segurança.
       
        Que quatro tipos comuns de estratégias/abordagens de teste o gerente de testes implementou no plano de teste?`,
    option1: "Metódico, analítico, reativo e avesso à regressão",
    option2: "Analítico, conforme às normas, consultivo e reativo",
    option3: "Baseada em modelos, metódica, analítica e consultiva",
    option4: "Regressão-aversão, consultiva, reativa e metódica",
    ans: 2,
  },

  {
    question:
      "Qual das seguintes é uma característica de uma abordagem baseada em métricas para a estimativa de teste?",
    option1:
      "Orçamento que foi utilizado por um projeto de teste anterior semelhante.",
    option2:
      "Experiência geral coletada em entrevistas com gerentes de testes.",
    option3:
      "Estimativa de esforço para automação de testes acordada na equipe de teste.",
    option4: "Mediana dos cálculos coletados de especialistas empresariais.",
    ans: 1,
  },
  {
    question: `Você está testando uma nova versão de software para uma máquina de café. A máquina pode preparar diferentes tipos de café com base em quatro categorias, ou seja, tamanho do café, açúcar, leite e xarope. Os critérios são os seguintes:
            • Tamanho do café (pequeno, médio, grande)
            • Açúcar (nenhum, 1 unidade, 2 unidades, 3 unidades, 4 unidades)
            • Leite (sim ou não)
            • Xarope de sabor café (sem xarope, caramelo, avelã, baunilha)
        Agora você está escrevendo um relatório de defeito com as seguintes informações:
            • Título: Baixa temperatura do café.
            • Breve resumo: Quando você seleciona café com leite, o tempo para preparar o café é muito longo e a temperatura da bebida é muito baixa (menos de 40 °C).
            • Resultado esperado: A temperatura do café deve ser padrão (cerca de 75 °C).
            • Grau de risco: Médio
            • Prioridade: Normal
        Que informações valiosas foram omitidas no relatório de defeitos acima?`,
    option1: "Os resultados reais dos testes",
    option2: "Identificação da versão testada do software",
    option3: "Status do defeito",
    option4: "Ideias para melhorar o caso teste",
    ans: 2,
  },
  {
    question:
      "Qual dos seguintes é o MAIS provável que seja um benefício das ferramentas de execução de testes?",
    option1: "É fácil criar testes de regressão.",
    option2: "É fácil manter o controle de versão dos ativos de teste.",
    option3: "É fácil projetar testes para testes de segurança.",
    option4: "É fácil executar testes de regressão.",
    ans: 4,
  },
  {
    question:
      "Qual das seguintes ferramentas de teste é mais adequada para desenvolvedores do que para testadores?",
    option1: "Ferramentas de gerenciamento de requisitos.",
    option2: "Ferramentas de gerenciamento da configuração.",
    option3: " Ferramentas de gerenciamento de defeitos.",
    option4: "Ferramentas de teste de desempenho.",
    ans: 3,
  },
];
