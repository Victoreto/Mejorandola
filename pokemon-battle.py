class pikachu():
	hp = 100
	ataque = 55

	def win(self):
		print "pikachu win"

class jigglypuff():
	hp = 100
	ataque = 45

	def win(self):
		print "Jigglypuff win"

turno = 1

while(pikachu.vida > 0 and jigglypuff.vida > 0):
	if (turno == 1):
		jigglypuff.vida = jigglypuff.vida - pikachu.ataque
	else:
		pikachu.vida = pikachu.vida - jigglypuff.ataque

if(pikachu.hp<=0):
	jigglypuff.win()
else:
	pikachu.win()

