import { Box, Text, Image, Section, Container, Column, Rows, Row, Columns, FlexBox, FlexItem, Title, Icon, INSERT_SPACE_BETWEEN, Button, Card, CardImage, CardContent, Link, colors, AccordionItem, AccordionHeader, AccordionBody, Accordion } from "@trilogy-ds/react";
import header from '../../public/Frame 838.png'; 

export default function Page() {
      const items = Array.from({ length: 7 });
  return (
    <>
        <Section style={{ backgroundColor: "#25465F" }}>
            <FlexBox justify="SPACE_AROUND" direction={{mobile: 'column'}}>
                
                <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                    <Title level={1} style={{color:"white",fontSize: "48px",lineHeight:"50px"}}>
                            Réparation de votre téléphone
                            </Title>

                            <Text level={1} style={{color:"white",marginTop:"20px"}}>
                            Un smartphone cassé ou en panne, ça arrive à tout le monde.

                            </Text>
                            <Text level={1} style={{color:"white"}}>
                            Heureusement, que vous soyez sous garantie ou non, on a des solutions
                            de réparation pour vous !
                            </Text>
                </div>
                <div>
                   <img src="/Frame%20838.png" alt="header image" /> 
                </div>
            </FlexBox>    
        </Section>
        <Section style={{ backgroundColor: "#F4F4F4" }}>
            <Title style={{textAlign:"center"}} >Le choix d’un partenaire expert pour votre téléphone</Title>
            
                <Columns>
                    <FlexBox justify="CENTER" >
                        <FlexItem size={11}>
                            <Column size={10}>
                                <FlexBox gap={8} direction={{mobile: 'column'}} align="CENTER">
                                    <div style={{flex:1}}>
                                    <img src="/img2.jpg" alt="header image" /> 
                                    </div>
                                    <div style={{flex:1,display:"flex",flexDirection:"column", justifyContent:"center",color:"black"}}>
                                        <Text level={1} style={{fontWeight:600}}>
                                                WeFix, filiale de Fnac Darty, est le leader français de la réparation de smartphones
                                                </Text>

                                                <Text level={1} style={{marginTop:"20px"}}>
                                                Quelle que soit la réparation, WeFix a la solution : écran, batterie,
                    WiFi, haut-parleur, écouteurs, appareil photo, connecteur de charge, avec des pièces compatibles.

                                                </Text>
                                                <Text level={1} >
                                                Visiter WeFix
                                                </Text>
                                    </div>
                                </FlexBox>  
                            </Column>
                        </FlexItem>
                    </FlexBox>    
                </Columns>
            
            
            
        </Section>

        <Section style={{ backgroundColor: "#25465F", color:"white"}}>
            <Title level={2} style={{textAlign:"center"}}>Bénéficiez du service de réparation express en boutique*</Title>
            <FlexBox justify="CENTER">
             <Button>Trouver ma boutique</Button>
            </FlexBox>

            <div>
                <Title style={{textAlign:"center"}} level={4}>Avec Bouygues Telecom, la réparation c’est…</Title>
                <Container style={{margin:"50px 0"}}>
                    <Columns>
                        <Column style={{textAlign:"center"}}>
                            <img src="/Users.png" alt="users icon" /> 
                            <Title  level={5}>Ouvert à tous</Title>
                            <Text >Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                        <Column style={{textAlign:"center"}}>
                        <img src="/France.png" alt="users icon" /> 
                            <Title level={5}>Ouvert à tous</Title>
                            <Text>Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                        <Column style={{textAlign:"center"}}>
                        <img src="/Calendar.png" alt="users icon" /> 
                            <Title level={5}>Ouvert à tous</Title>
                            <Text>Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                        <Column style={{textAlign:"center"}}>
                        <img src="/Mobile-tools.png" alt="users icon" /> 
                            <Title level={5}>Ouvert à tous</Title>
                            <Text>Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                    </Columns>
                </Container>
                <Text level={4} style={{textAlign:"center"}}>* Retrouvez les conditions et informations détaillées du service de réparation dans la FAQ accessible en bas de page. Kit-mains libre recommandé.</Text>
            </div>
        </Section>

        <Section style={{ backgroundColor: "#F4F4F4"}}>
            <Title level={2} style={{textAlign:"center"}}>Et encore plus d’avantages si vous êtes client Bouygues Telecom !</Title>
            <Container style={{textAlign:"center"}}>
                <FlexBox gap={5} direction={{mobile: 'column'}}>
                    <Card>
                        <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                            <CardImage src="/Mobile-tools.png" />
                        </FlexBox>
                        <CardContent>
                                <Title level={4}> -30% de remise* valables 
                                sur toutes les réparations </Title>
                                <Text level={2}> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                <Text level={4}> *2 fois par an !
                                </Text>
                        </CardContent>
                    </Card>
                    <Card>
                        <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                            <CardImage src="/Mobile-tools.png" />
                        </FlexBox>
                        <CardContent>
                                <Title level={4}> On vous prête
un smartphone </Title>
                                <Text level={2}> le temps de la réparation (i) </Text>
                                
                        </CardContent>
                    </Card>
                    <Card>
                        <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                            <CardImage src="/Mobile-tools.png" />
                        </FlexBox>
                        <CardContent>
                                <Title level={4}> -30% de remise* valables 
        sur toutes les réparations </Title>
                                <Text level={2}> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                <Text level={4}> *2 fois par an !
                                </Text>
                        </CardContent>
                    </Card>
                
                </FlexBox>
                
            </Container>
            
        </Section>

        <Section style={{ backgroundColor: "#E4EAED"}}>
            <Title level={2} style={{textAlign:"center"}}>Nos forfaits, pour vous</Title>
            <Container style={{textAlign:"center"}}>
                
                <FlexBox gap={5} direction={{mobile: 'column'}}>
                    <Columns style={{display:"flex", justifyContent:"center"}}>
                        <Column size={4}>
                            <Card>
                            <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                                <CardImage src="/Mobile-tools.png" />
                            </FlexBox>
                            <CardContent>
                                    <Title level={4}> Découvrir nos forfaits Bouygues Telecom </Title>
                                    <Text level={2}> Bénéficiez d’un réseau mobile de qualité, d’avantages et de services exclusifs et d'un nouveau smartphone. </Text>
                                    <Button variant="PRIMARY">En profiter</Button>
                            </CardContent>
                        </Card>
                        </Column>
                        <Column size={4}>
                            <Card>
                            <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                                <CardImage src="/Mobile-tools.png" />
                            </FlexBox>
                            <CardContent>
                                    <Title level={4}> Découvrir nos forfaits B&YOU sans engagement </Title>
                                    <Text level={2}> Profitez de la qualité de notre réseau avec nos forfaits B&YOU sans engagement. </Text>
                                    <Button variant="PRIMARY">En profiter</Button>
                            </CardContent>
                        </Card>
                        </Column>
                    </Columns>
                    
                     
                </FlexBox>
                
            </Container>
            
        </Section>

        <Section style={{ backgroundColor: "#0C7B91"}}>
            <Title level={2} style={{textAlign:"center", color:"white"}}>Quel que soit le problème, nous avons la solution</Title>
            <Container style={{textAlign:"center"}}>
                
                <FlexBox gap={5} direction={{mobile: 'column'}}>
                    <Columns style={{display:"flex", justifyContent:"center"}}>
                        <Column size={5}>
                            <Card>
                            <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                                <CardImage src="/Mobile-tools.png" />
                            </FlexBox>
                            <CardContent>
                                    <Title level={4}> -30% de remise* valables 
            sur toutes les réparations </Title>
                                    <Text level={2}> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                    <Text level={4}> *2 fois par an !
                                    </Text>
                            </CardContent>
                        </Card>
                        </Column>
                        <Column size={5}>
                            <Card>
                            <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
                                <CardImage src="/Mobile-tools.png" />
                            </FlexBox>
                            <CardContent>
                                    <Title level={4}> -30% de remise* valables 
            sur toutes les réparations </Title>
                                    <Text level={2}> et -20% de remise sur les autres réparations effectuées lors de la même prise en charge </Text>
                                    <Text level={4}> *2 fois par an !
                                    </Text>
                            </CardContent>
                        </Card>
                        </Column>
                    </Columns>
                    
                     
                </FlexBox>
                
            </Container>
        </Section>

        <Section style={{ backgroundColor: "#F4F4F4"}}>
            <Title level={2} style={{textAlign:"center"}}>L’assurance, la formule tout confort pour votre mobile</Title>
                <Rows>
                    <Row>
                        <Columns  style={{display:"flex", justifyContent:"center"}}>
                                <Column size={5}>
                                    <img style={{height:"100%"}}  src="/Frame%20823.png" alt=" image" />
                                </Column>
                            <Column size={5}>
                                <Rows>
                                    <Row>
                                        <Card>
                                                <FlexBox justify={{mobile: 'CENTER',tablet: 'START'}} style={{margin:"10px 0 0 20px"}}>
                                                    <CardImage src="/Mobile-tools.png" />
                                                </FlexBox>
                                                <CardContent>
                                                    <FlexBox direction="COLUMN" align={{mobile: 'CENTER',tablet: 'START'}}>
                                                        <Title level={4}> Aucune dépense </Title>
                                                        <Text level={2}> A débourcer en cas d'incident
                                                        </Text>
                                                    </FlexBox>
                                                        
                                                </CardContent>
                                            </Card>
                                    </Row>
                                    <Row>
                                        <Card>
                                            <FlexBox justify={{mobile: 'CENTER',tablet: 'START'}} style={{margin:"10px 0 0 20px"}}>
                                                <CardImage src="/Mobile-tools.png" />
                                            </FlexBox>
                                            <CardContent>
                                                <FlexBox direction="COLUMN" align={{mobile: 'CENTER',tablet: 'START'}}>
                                                    <Title level={4}> Téléphone assuré</Title>
                                                    
                                                    <Text level={2}> en cas de vol, dommages ou oxydations
                                                    </Text>
                                                </FlexBox>
                                            </CardContent>
                                        </Card>
                                    </Row>
                                </Rows>
                            </Column>
                            
                        </Columns>
                        
                    </Row>
                </Rows>
                <FlexBox justify="CENTER" style={{marginTop:"30px"}}>
            <Button variant="PRIMARY">L'assurance en détail</Button>
            </FlexBox>
        </Section>

        <Section style={{ backgroundColor: "#25465F", color:"white"}}>
            <Title level={2} style={{textAlign:"center"}}>Réparer son téléphone, c'est aussi un geste pour l’environnement</Title>
            <Title level={5} style={{textAlign:"center",margin:"10px 0 40px 0"}}>Prolonger la durée de vie d’un an d’un téléphone permettrait
de réduire son empreinte carbone de 30% environ*</Title>            

            <div>
                <Title style={{textAlign:"center"}} level={4}>Comment ?</Title>
                <Container style={{margin:"50px 0"}}>
                    <Columns>
                        <Column style={{textAlign:"center"}}>
                            <img src="/Users.png" alt="users icon" /> 
                            <Title  level={5}>Ouvert à tous</Title>
                            <Text >Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                        <Column style={{textAlign:"center"}}>
                        <img src="/France.png" alt="users icon" /> 
                            <Title level={5}>Ouvert à tous</Title>
                            <Text>Que vous soyez client Bouygues Telecom ou non !</Text>
                        </Column>
                        
                    </Columns>
                </Container>
                <Text level={4} style={{textAlign:"center"}}>*Source : Green Alliance</Text>
            </div>
        </Section>
        
        <Section style={{ backgroundColor: "#F4F4F4"}}>
            <Title level={2} style={{textAlign:"center"}}>Ensemble, faisons durer nos smartphones plus longtemps</Title>
            <FlexBox justify="CENTER">
                <Box style={{width:"70%"}}>
                <Columns >
                    <Column size={3}>
                        <img src="/image%202.png" />
                    </Column>
                    <Column >
                        <Title level={4}> Nos téléphones ont une place particulière dans notre quotidien, en nous accompagnant partout et tout le temps </Title>
                        <Text level={1}> Alors pour s’en séparer le plus tard possible, on lance les Solutions Smartphone Durable : 4 façons de prolonger la vie de nos mobiles tout en faisant un geste pour la planète. </Text>
                        <Text level={2}> Découvrire nos solutions
                        </Text>
                    </Column>
                
                </Columns>
            </Box>    
            </FlexBox>
            

        </Section>

        <Section >
            <Columns>
                <Column>
                    <Title  level={2}>Toutes vos questions sur la réparation de téléphone</Title>

                </Column>
                <Column>
                <Accordion>
                    {items.map((_, index) => (
                        <AccordionItem id={`item-${index}`} key={index}>
                        <AccordionHeader>
                            <Text>Accordion item {index + 1}</Text>
                        </AccordionHeader>

                        <AccordionBody>
                            <Text>Lorem ipsum dolor sit amet</Text>
                        </AccordionBody>
                        </AccordionItem>
                    ))}
                    </Accordion>
                    
                </Column>
            </Columns>
        </Section>

        <Section style={{ backgroundColor: "#F4F4F4"}}>
            <Title level={2} style={{textAlign:"center"}}>Nos astuces pour prendre soin de votre mobile</Title>
                    <Container>
                    <Columns>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-3.png" />
                                <CardContent>
                                    <Title level={5}>Comment prolonger la vie de son smartphone ?</Title>
                                    <Text level={1}><Link blank href="https://github.com/jvenerosy/bt-digital-test-technique">Visiter WeFix </Link> </Text>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-3.png" />
                                <CardContent>
                                    <Title level={5}>Comment protéger son smartphone de l’oxydation ?</Title>
                                    <Text level={1}><Link blank href="https://github.com/jvenerosy/bt-digital-test-technique">Visiter WeFix </Link> </Text>
                                </CardContent>
                            </Card>
                        </Column>
                        <Column>
                            <Card fullheight>
                                <CardImage alt={""} src="/consigne-3.png" />
                                <CardContent>
                                    <Title level={5}>Les conseils à suivre avant d’envoyer votre téléphone en réparation</Title>
                                    <Text level={1}><Link blank href="https://github.com/jvenerosy/bt-digital-test-technique">Visiter WeFix </Link> </Text>
                                </CardContent>
                            </Card>
                        </Column>
                    </Columns>
                </Container>
        </Section>
    </>
  );
}
