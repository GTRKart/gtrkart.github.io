import {
  QueryConstraint,
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

type Subscription = {
  id: string;
  userUid: string;
  userName: string;
  paid: boolean;
};

type RaceEvent = {
  id: string;
  active: boolean;
  title: string;
  datetime: Date;
  location: string;
  minParticipants: number;
  maxParticipants: number;
  weight: number;
  price: number;
  priceDetails: string;
  paymentDeadline: Date;
  paymentMethod: string;
  subscriptions: Subscription[];
};

const useCollection = <T>(path: string, ...params: QueryConstraint[]) => {
  const [collectionData, setCollectionData] = useState<Partial<T>[]>([]);

  const raceEventsQuery = query(collection(db, path), ...params);

  useEffect(() => {
    const getCollectionData = async () => {
      const querySnapshot = await getDocs(raceEventsQuery);
      const collectionData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as Partial<T>[];
      setCollectionData(collectionData);
    };

    getCollectionData();
  }, []);

  return collectionData;
};

const useRaceEvents = () => {
  const [raceEvents, setRaceEvents] = useState<Partial<RaceEvent>[]>([]);
  const data = useCollection<RaceEvent>(
    'raceEvents',
    orderBy('datetime', 'desc'),
    where('active', '==', true)
  );

  useEffect(() => {
    setRaceEvents(
      data.map(({ datetime, paymentDeadline, ...rest }) => ({
        datetime: (datetime as unknown as Timestamp)?.toDate(),
        paymentDeadline: (paymentDeadline as unknown as Timestamp)?.toDate(),
        ...rest,
      }))
    );
  }, [data]);

  return raceEvents;
};

export type { RaceEvent, Subscription };

export { useCollection, useRaceEvents };
