import { connectToDatabase } from "$lib/db";
import { ObjectId } from "mongodb";

export async function get(request) {
  try {
    const s = request.query.get("sort") || -1;
    var sort = new Object();
    sort = {day: Number(s)};
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const collection = db.collection("Roadbook");
    const roadbook = await collection.find().sort(sort).toArray();
    for (var i = 0; i < roadbook.length; i++) {
      roadbook[i].key = roadbook[i].day;
    }
    return {
      status: 200,
      body: {
        roadbook,
      },
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        erreur: err.message,
      },
    };
  }
}

export async function post(request) {
  // intégration d'un nouveau jour
  try {
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const collection = db.collection("Roadbook");
    const roadbook = JSON.parse(request.body);

    let t = await collection.insertOne(roadbook);

    return {
      status: 200,
      body: {
        insertedId: t.insertedId.toString(),
      },
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        erreur: err.message,
      },
    };
  }
}
export async function put(request) {
  try {
    const roadbook = JSON.parse(request.body);
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const collection = db.collection("Roadbook");

    await collection.updateOne(
      { day: roadbook.day },
      {
        $set: {
          start: roadbook.start,
          end: roadbook.end,
          weather: roadbook.weather,
          difficulty: roadbook.difficulty,
          night: roadbook.night,
          landscape: roadbook.landscape,
          mood: roadbook.mood,
          detail: roadbook.detail,
          summary: roadbook.summary,
          dayCounter:roadbook.dayCounter,
          lat: roadbook.lat,
          lng: roadbook.lng,
          debutParcours: roadbook.debutParcours,
          finParcours: roadbook.finParcours,
          dist: roadbook.dist,
          eleNeg:roadbook.eleNeg,
          elePos: roadbook.elePos,
          variante: roadbook.variante,
        },
      }
    );

    return {
      status: 200,
      body: {
        message: "Success",
      },
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        erreur: err.message,
      },
    };
  }
}

export async function del(request) {
  try {
    const dbConnection = await connectToDatabase();
    const db = dbConnection.db;
    const collection = db.collection("Roadbook");
    const roadbook = JSON.parse(request.body);

    if (roadbook.key != "ALL") {
      await collection.deleteOne({ day: roadbook.key });
    } else {
      await collection.deleteMany();
    }

    return {
      status: 200,
      body: {
        message: "Success",
      },
    };
  } catch (err) {
    return {
      status: 500,
      body: {
        erreur: err.message,
      },
    };
  }
}
